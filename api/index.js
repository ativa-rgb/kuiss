import express from "express";

const app = express();


//middleware => function menangani riquest sebelum ke route

app.use((req, res, next) => {
    console.log(req.url);
    next();
});
//route
app.get("/api/salam", (req, res) => {
    res.send("assalamualaikum");
});

app.listen(3000, () => {
    console.log("Berhasil Jalan ");
});