require('dotenv').config() // npm i dotenv

// process.env.USER_ID // "239482"
// process.env.USER_KEY // "foobar"
// process.env.NODE_ENV // "development"

console.log(
  `USER_ID: ${process.env.USER_ID},
    USER_KEY: ${process.env.USER_KEY},
    NODE_ENV: ${process.env.NODE_ENV}`
)
