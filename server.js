// const dotenv = require("dotenv");
// require("dotenv").config({ path: "./.env" });
const app = require("./app");

// console.log(process.env);

// console.log(app.get("env"));
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`app starting on ${port}`);
});
