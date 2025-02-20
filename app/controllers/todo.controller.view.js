"use strict";

const Todo = require("../models/todo.model")
const PRIORITIES = {
    "-1": "low",
    "0": "normal",
    "1": "high"
}

module.exports = {
    list: async (req, res) => {

        const data = await Todo.findAndCountAll()

        res.render("index", { todos: data.rows, count: data.count, priorities: PRIORITIES })
    },

    create: async (req, res) => {

        const data = await Todo.create(req.body)

        res.status(201).send({
            error: false,
            result: data
        })
    },

    read: async (req, res) => {

        const data = await Todo.findByPk(req.params.id)

        res.render("todoRead", { todo: data, priorities: PRIORITIES })
    },

    update: async (req, res) => {

        const data = await Todo.update(req.body, { where: { id: req.params.id } })

        res.status(202).send({
            error: false,
            result: await Todo.findByPk(req.params.id),
            message: "Updated",
            count: data
        })
    },

    delete: async (req, res) => {

        const data = await Todo.destroy({ where: { id: req.params.id } })

        if (data > 0) {

            res.sendStatus(204)

        } else {
            res.errorStatusCode = 404
            throw new Error("Can not Deleted. (Maybe already deleted)")
        }
    },
}