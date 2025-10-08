import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Allow all origins (for development)
// Or allow only your frontend origin
// app.use(cors({ origin: "http://127.0.0.1:5500" }));
app.use(cors({ origin: "http://127.0.0.1:5500" }));

app.use(express.json());

app.post("/api/v1/chat", async (req,res)=>{

    const userMessage = req.body.message;

    console.log("This is the user message", userMessage)
})


const port = process.env.PORT || 3000

app.listen(port, ()=>console.log(`Server running on ${port}`)
);


