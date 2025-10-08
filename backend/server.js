import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/api/v1/chat", async (req,res)=>{

    const userMessage = req.body.message;

    try {
        
    } catch (error) {
        
    }
})


const port = process.env.PORT || 3000

app.listen(port, ()=>console.log(`Server running on ${port}`)
);


