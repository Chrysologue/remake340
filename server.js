/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
require("dotenv").config()
const app = express()
const static = require("./routes/static")
const expressLayout = require("express-ejs-layouts")
const baseController = require("./controllers/baseController")

/* ***********************
 * View engine and Templates
 *************************/
app.set("view engine", "ejs")
app.use(expressLayout)
app.set("layout", "./layouts/layout")

/* ***********************
 * Middleware
 *************************/
app.use(static)

//Index route
app.get("/", baseController.buildHome)

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})
