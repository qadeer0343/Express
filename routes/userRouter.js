var routes = require("express").Router();
const { create, getAll } = require("../controllers/userController");
const {createUserSchema} = require("../validation/users")

routes.get("/get-all-users", getAll);
routes.post("/create-user",createUserSchema, create);

module.exports = routes;
