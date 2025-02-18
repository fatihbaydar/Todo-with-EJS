"use strict";

const Todo = require("../models/todo.model")

module.exports = {
    list: async (req, res) => {

        const data = await Todo.findAndCountAll()

        res.status(200).send({
            error: false,
            result: data
        })
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

        res.status(200).send({
            error: false,
            result: data
        })
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