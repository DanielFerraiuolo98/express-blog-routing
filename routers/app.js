const express = require("express");
const router = express.Router();

const post = require("../data/post.js");

router.get("/posts", function (req, res) {
    const postName = req.query.name;
    console.log(postName);
    let response = {
        totalCount: post.length,
        data: [...post],
    };
    res.json(response);
});

//show
router.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const item = post.find((posts) => posts.id === id);
    if (item) {
        response = {
            success: true,
            item,
        };
    }
    else {
        res.status(404);
        response = {
            success: false,
            message: "il post non è stato trovato",
        };
    }
    res.json(response);
});

//creare una nuova risorsa => post
router.post("/posts", (req, res) => {
    res.send("creazione nuovo post");
});

//cambiare tutta la risorsa => update
router.put("/posts/:id", (req, res) => {
    res.send("modifica integrale di un post");
});

//cambiare parzialmente una risorsa => modify
router.patch("/posts/:id", (req, res) => {
    res.send("modifica parziale di un post");
});

//cancellazione di una risorsa => destroy
router.delete("/posts/:id", (req, res) => {
    res.send("cancellazione di un post");
});

module.exports = router;
