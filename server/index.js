import connection from "./db.js"
import cors from "cors";
import express from "express";
const app = express();
import todomodel from "./models/task.js";
connection();

app.use(express.json());
app.use(cors());


app.get("/getTodos", async(req, res) => {
    const allTodos = await todomodel.find({});
    res.send(allTodos);
});

app.post("/addTodo", async(req, res) => {
    const task = req.body.desc;
    const newtodo = new todomodel({
        task: task,
    });
    await newtodo.save();
    res.send("done");
});



const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));