var d2gsi = require('dota2-gsi');
var server = new d2gsi({
  port: process.env.PORT
});

const express = require("express");
const app = express();
const http = require("http").Server(app);
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

//TODO surely theres a better way to do this
let clientSocket;

io.on('connection', (socket) => {
  console.log(`${socket.id} user just connected!`);
  clientSocket = socket;

  socket.on('disconnect', () => {
    socket.disconnect()
    console.log('A user disconnected');
  });
});

http.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});

server.events.on('newclient', (client) => {
  console.log("New client connection, IP address: " + client.ip);
  if (client.auth && client.auth.token) {
    console.log("Auth token: " + client.auth.token);
  } else {
    console.log("No Auth token");
  }
  if (client?.gamestate?.draft) {
    clientSocket?.emit('draft', client?.gamestate?.draft);
  }

  client.on('draft:activeteam', (activeteam) => {
    console.log({ activeteam });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:pick', (pick) => {
    console.log({ pick });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:activeteam_time_remaining', (activeteam_time_remaining) => {
    console.log({ activeteam_time_remaining });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:radiant_bonus_time', (radiant_bonus_time) => {
    console.log({ radiant_bonus_time });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:dire_bonus_time', (dire_bonus_time) => {
    console.log({ dire_bonus_time });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });

  client.on('draft:team2:home_team', (home_team) => {
    console.log({ home_team });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team2:pick0_class', (pick0_class) => {
    console.log({ pick0_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team2:pick1_class', (pick1_class) => {
    console.log({ pick1_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team2:pick2_class', (pick2_class) => {
    console.log({ pick2_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team2:pick3_class', (pick3_class) => {
    console.log({ pick3_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team2:pick4_class', (pick4_class) => {
    console.log({ pick4_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });

  client.on('draft:team2:ban0_class', (ban0_class) => {
    console.log({ ban0_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team2:ban1_class', (ban1_class) => {
    console.log({ ban1_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team2:ban2_class', (ban2_class) => {
    console.log({ ban2_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team2:ban3_class', (ban3_class) => {
    console.log({ ban3_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team2:ban4_class', (ban4_class) => {
    console.log({ ban4_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team2:ban5_class', (ban5_class) => {
    console.log({ ban5_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team2:ban6_class', (ban6_class) => {
    console.log({ ban6_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });

  client.on('draft:team3:home_team', (home_team) => {
    console.log({ home_team });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team3:pick0_class', (pick0_class) => {
    console.log({ pick0_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team3:pick1_class', (pick1_class) => {
    console.log({ pick1_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team3:pick2_class', (pick2_class) => {
    console.log({ pick2_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team3:pick3_class', (pick3_class) => {
    console.log({ pick3_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team3:pick4_class', (pick4_class) => {
    console.log({ pick4_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });

  client.on('draft:team3:ban0_class', (ban0_class) => {
    console.log({ ban0_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team3:ban1_class', (ban1_class) => {
    console.log({ ban1_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team3:ban2_class', (ban2_class) => {
    console.log({ ban2_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team3:ban3_class', (ban3_class) => {
    console.log({ ban3_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team3:ban4_class', (ban4_class) => {
    console.log({ ban4_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team3:ban5_class', (ban5_class) => {
    console.log({ ban5_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
  client.on('draft:team3:ban6_class', (ban6_class) => {
    console.log({ ban6_class });
    clientSocket?.emit('draft',  client?.gamestate?.draft);
  });
});
