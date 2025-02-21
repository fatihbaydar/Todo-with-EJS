"use strict";

const router = require("express").Router()
const todo = require("../controllers/todo.controller.view")

// router.route("/")
//     .get(todo.list)
//     .post(todo.create)

// router.route("/:id")
//     .get(todo.read)
//     .put(todo.update)
//     .patch(todo.update)
//     .delete(todo.delete)

router.get("/", todo.list)
router.all("/create", todo.create)
router.get("/:id", todo.read)
router.all("/:id/update", todo.update)
router.get("/:id/delete", todo.delete)

module.exports = router