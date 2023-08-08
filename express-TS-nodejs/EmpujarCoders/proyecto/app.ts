import express, { Express, Request, Response} from "express";

const app:Express = express();

app.get("/", (req:Request, res:Response) => {
    res.send("Express + TypeScriptServer");
});

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http:${PORT}`)
})