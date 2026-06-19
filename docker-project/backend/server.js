const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let cars = [];

app.get("/cars",(req,res)=>{
res.json(cars);
});

app.post("/cars",(req,res)=>{

const car = {
id:Date.now(),
number:req.body.number,
time:new Date().toLocaleString()
};

cars.push(car);

res.json(car);

});

app.delete("/cars/:id",(req,res)=>{

cars = cars.filter(
car => car.id != req.params.id
);

res.json({
message:"Vehicle Removed"
});

});

app.listen(5000,()=>{
console.log("Server Running on Port 5000");
});
