import express from "express";
import socketIO from "socket.io";
import morgan from "morgan";
import { join } from "path";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(morgan("dev"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) => res.send("hi"));

const server = app.listen(PORT, () => console.log(`${PORT}번 연결!`));
