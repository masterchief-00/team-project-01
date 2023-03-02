const app = require("./server.js");
const db = require("./models/index.js");

app.listen(5000, () => {
   console.log("-->Be advised, the server is up and running!");
 });

 (async () => {
   try {
     await db.sequelize
       .sync({ force: false, alter: true })
       .then(() => console.log("Successfully connected to the db"));
   } catch (error) {
     console.log("Error connecting to the db", error.message);
   }
})();


