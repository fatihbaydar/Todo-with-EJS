"use strict";

const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize("sqlite:./db.sqlite3")

const Todo = sequelize.define("todos", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: DataTypes.TEXT,
    priority: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
})

//* Syncronization:
// sequelize.sync() 

// Connect to Database:
sequelize.authenticate()
    .then(() => console.log("* Connected to Database * "))
    .catch(() => console.log("* Failed to connect to database * "))

module.exports = Todo