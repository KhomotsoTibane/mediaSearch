const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const fetch = require('node-fetch');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


//search parameters entered by the user in the frontend
let search="";
let media = "";

app.post("/api", (req,res)=>{
    search  = req.body.search;
    media = req.body.mediaType;  
})

app.get("/api/search", (req,res)=>{
    const url =`http://itunes.apple.com/search?term=${search}&media=${media}&limit=30`;
    fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log("searching for " + search + "in " + media) ;
        res.json(json);
    });
});



module.exports = app.listen(process.env.PORT || 5000, ()=>{console.log("server started on port 5000")});


