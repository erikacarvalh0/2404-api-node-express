import mongoose from "mongoose"

mongoose.connect("mongodb+srv://erikacarvalho:152436Kinha@ec.oxkb4.mongodb.net/ec-denode");

let db = mongoose.connection;

export default db;