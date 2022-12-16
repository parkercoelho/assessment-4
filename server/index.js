const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getGoodCompliment, getFortune, getDost, getMT, getMLK, addQuote } = require('./controller')

app.get("/api/compliment", getGoodCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/dostoevsky", getDost)
app.get("/api/teresa", getMT)
app.get("/api/mlk", getMLK)
app.post("/api/newquotes", addQuote)



app.listen(4000, () => console.log("Server running on 4000"));
