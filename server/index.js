import connection from "./db.js"
import cors from "cors";
import express from "express";
const app = express();
import todomodel from "./models/task.js";
connection();
import bodyparser from "body-parser";

app.use(express.json());

app.use(cors());

app.set('port', process.env.port || 4000);
app.use(bodyparser.json());


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

app.listen(app.get('port'), function(err,response){
    console.log("Server is running on port ", app.get('port'));
});