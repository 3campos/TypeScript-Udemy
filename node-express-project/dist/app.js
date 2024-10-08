"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
// this json method parses bodies of incoming requests and extracts json data to populate the body key (see todos.ts) on the request object with the json data
app.use('/todos', todos_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
//the nextFunction is executed which will let the request continue its iteration to the next request in the queue
app.listen(3000);
