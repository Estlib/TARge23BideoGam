const port = 8080;
const app = require('express')();
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require("./docs/swagger.json");

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.get("/games", (req, res) => { res.send( ["Throne & Liberty","Goat Simulator","Team Fortress 2"]
    /*[
     { GameID: 1, GameName: "Throne & Liberty", ReleaseDateEU: "01.10.2024", ReviewScore: 10 },
    { GameID: 2, GameName: "Goat Simulator", ReleaseDateEU: "01.04.2014", ReviewScore: 10 },
    { GameID: 3, GameName: "Team Fortress 2", ReleaseDateEU: "01.01.2007", ReviewScore: 10 }
] */)})



app.listen(port, () => {console.log(`Api on saadaval aadressil: http://localhost:${port}`);});