"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept JSON data
app.use(express.json())

// express-async-errors:
require("express-async-errors")

/* ------------------------------------------------------- */
//* Routes:

app.use("/todos", require("./app/routes/todo.router"))

/* ------------------------------------------------------- */
const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log("errorHandler worked.")
    res.status(errorStatusCode).send({
        error: true, 
        message: err.message, 
        cause: err.cause
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));