require('dotenv').config();
var eventEmitter = require('events').EventEmitter;
var events = new eventEmitter();

var clients = [];
var port = process.env.PORT || 3000;
var tokens = process.env.TOKENS ? process.env.TOKENS.split(',') : null;

function gsi_client (ip, auth) {
  this.ip = ip;
  this.auth = auth;
  this.gamestate = {};
}
gsi_client.prototype.__proto__ = eventEmitter.prototype;

function Check_client(req, res, next) {
  // Check if this IP is already talking to us
  for (var i = 0; i < clients.length; i++) {
      if (clients[i].ip == req.ip) {
          req.client = clients[i];
          return next();
      }
  }

  // Create a new client
  clients.push(new gsi_client(req.ip, req.body.auth));
  req.client = clients[clients.length - 1];
  req.client.gamestate = req.body;

  // Notify about the new client
  events.emit('newclient', clients[clients.length - 1]);

  next();
}

function Emit_all(prefix, obj, emitter) {
  Object.keys(obj).forEach(function(key) {
      // For scanning keys and testing
      // emitter.emit("key", ""+prefix+key);
      // console.log("Emitting '"+prefix+key+"' - " + obj[key]);
      emitter.emit(prefix+key, obj[key]);
  });
}

function Recursive_emit(prefix, changed, body, emitter) {
  Object.keys(changed).forEach(function(key) {
      if (typeof(changed[key]) == 'object') {
          if (body[key] != null) { // safety check
              Recursive_emit(prefix+key+":", changed[key], body[key], emitter);
          }
      } else {
          // Got a key
          if (body[key] != null) {
              if (typeof body[key] == 'object') {
                  // Edge case on added:item/ability:x where added shows true at the top level
                  // and doesn't contain each of the child keys
                  Emit_all(prefix+key+":", body[key], emitter);
              } else {
                  // For scanning keys and testing
                  // emitter.emit("key", ""+prefix+key);
                  // console.log("Emitting '"+prefix+key+"' - " + body[key]);
                  emitter.emit(prefix+key, body[key]);
              }
          }
      }
  });
}

function Process_changes(section) {
  return function(req, res, next) {
      if (req.body[section]) {
          // console.log("Starting recursive emit for '" + section + "'");
          Recursive_emit("", req.body[section], req.body, req.client);
      }
      next();
  }
}

function Update_gamestate(req, res, next) {
  req.client.gamestate = req.body;
  // console.log(req.body?.player?.team2?.player0)
  next();
}

function New_data(req, res) {
  req.client.emit('newdata', req.body);
  res.end();
}

function Check_auth(tokens) {
  return function(req, res, next) {
      if (tokens) {
          if (req.body.auth && // Body has auth
              (req.body.auth.token == tokens || // tokens was a single string or
              (tokens.constructor === Array && // tokens was an array and
              tokens.indexOf(req.body.auth.token) != -1))) { // containing the token
              next();
          } else {
              // Not a valid auth, drop the message
              console.log("Dropping message from IP: " + req.ip + ", no valid auth token");
              res.end();
          }
      } else {
          next();
      }
  }
}

function parseAuthToken(authToken) {
  return authToken.split('-')[0];
}

const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");
const io = require('socket.io')(http, {
  cors: {
    origin: "*" //TODO who needs security
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log(`${socket.id} user just connected!`);

  socket.on('join', (boardName) => {
    console.log('join ', boardName)
    socket.join(boardName);
  });

  socket.on('disconnect', () => {
    socket.disconnect()
    console.log('A user disconnected');
  });
});

http.listen(port || 3000, () => {
  console.log(`Server listening on ${port || 3000}`);
});

app.post('/',
  Check_auth(tokens),
  Check_client,
  Update_gamestate,
  Process_changes('previously'),
  Process_changes('added'),
  New_data);

events.on('newclient', (client) => {
  console.log("New client connection, IP address: " + client.ip);
  if (client.auth && client.auth.token) {
    console.log("Auth token: " + client.auth.token);
  } else {
    console.log("No Auth token");
  }

  if (client?.gamestate?.draft) {
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  }

  client.on('draft:activeteam', (activeteam) => {
    console.log({ activeteam });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:pick', (pick) => {
    console.log({ pick });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:activeteam_time_remaining', (activeteam_time_remaining) => {
    console.log({ activeteam_time_remaining });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:radiant_bonus_time', (radiant_bonus_time) => {
    console.log({ radiant_bonus_time });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:dire_bonus_time', (dire_bonus_time) => {
    console.log({ dire_bonus_time });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });

  client.on('draft:team2:home_team', (home_team) => {
    console.log({ home_team });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team2:pick0_class', (pick0_class) => {
    console.log({ pick0_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team2:pick1_class', (pick1_class) => {
    console.log({ pick1_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team2:pick2_class', (pick2_class) => {
    console.log({ pick2_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team2:pick3_class', (pick3_class) => {
    console.log({ pick3_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team2:pick4_class', (pick4_class) => {
    console.log({ pick4_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });

  client.on('draft:team2:ban0_class', (ban0_class) => {
    console.log({ ban0_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team2:ban1_class', (ban1_class) => {
    console.log({ ban1_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team2:ban2_class', (ban2_class) => {
    console.log({ ban2_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team2:ban3_class', (ban3_class) => {
    console.log({ ban3_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team2:ban4_class', (ban4_class) => {
    console.log({ ban4_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team2:ban5_class', (ban5_class) => {
    console.log({ ban5_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team2:ban6_class', (ban6_class) => {
    console.log({ ban6_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });

  client.on('draft:team3:home_team', (home_team) => {
    console.log({ home_team });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team3:pick0_class', (pick0_class) => {
    console.log({ pick0_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team3:pick1_class', (pick1_class) => {
    console.log({ pick1_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team3:pick2_class', (pick2_class) => {
    console.log({ pick2_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team3:pick3_class', (pick3_class) => {
    console.log({ pick3_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team3:pick4_class', (pick4_class) => {
    console.log({ pick4_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });

  client.on('draft:team3:ban0_class', (ban0_class) => {
    console.log({ ban0_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team3:ban1_class', (ban1_class) => {
    console.log({ ban1_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team3:ban2_class', (ban2_class) => {
    console.log({ ban2_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team3:ban3_class', (ban3_class) => {
    console.log({ ban3_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team3:ban4_class', (ban4_class) => {
    console.log({ ban4_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team3:ban5_class', (ban5_class) => {
    console.log({ ban5_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
  client.on('draft:team3:ban6_class', (ban6_class) => {
    console.log({ ban6_class });
    io.to(parseAuthToken(client.auth.token)).emit('draft', client?.gamestate?.draft);
  });
});
