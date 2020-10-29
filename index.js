require('dotenv').config()

const server = require("./api/server.js");

const port = process.env.PORT || 4000;  // On Local port will be 5000, On Heroku it will use whatever Heroku supplies
const secret = process.env.SECRET_THING || 'foo';

console.log(port, secret);

process.env.PORT; // ONLY HEROKU

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
