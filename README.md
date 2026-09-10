# dota-drafter
A draft screen for casting, similar (but less pretty) than the ones you would see at a major dota production.

Dota2 has a game-state-integration system in which in-game events are emitted. We can hook into those events and use them to mirror the in-game draft on a web page. The Dota client reports its gamestate to a shared hosted server, which relays draft updates to your board over socket events.

Full disclosure, this project is not very polished.

## Setup

1. Configure the Dota client to report the gamestate. In order to do this you need to add the `gamestate_integration_dotagsi.cfg` config file to the following folder: `steamapps\common\dota 2 beta\game\dota\cfg\gamestate_integration\`. Feel free to move the file there. Make sure dota is not running when you do this. The `auth.token` in that file (e.g. `tultras-120`) determines your board name — the part before the `-`.

2. In a web page, navigate to `https://dota-drafter-6a4237bd4184.herokuapp.com/<your board name>` where you should see a blank draft board (its not the most pretty)

3. Start a draft in dota and the board should automatically track. The styling is not currently the most clean so you probably need to have the website in a 1920x1080 window. You can probably just source capture a small box.

![image](https://github.com/tristan-gill/dota-drafter/assets/5561751/797c3b7e-d7cf-4226-afac-9a392fac6cb0)
