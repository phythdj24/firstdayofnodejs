// const http = require("http");
// const modename = require("./features") common js

import http from "http";
import {gernrateLovePerctange} from "./features.js";
import fs from "fs"

// const home = fs.readFile("./index.html", ()=> {
//     console.log("file Read")
// })

const home = fs.readFileSync("./index.html");
console.log(home)


const server= http.createServer((req,res)=> {
    // res.end("<h1> Noice </h1>")

    if(req.url ==="/about"){
        res.end(`<h1> Love Perctange is ${gernrateLovePerctange()} </h1>`)  
    } 
   else if(req.url==="/"){
      fs.readFile("./index.html", (err, home)=> {
        res.end(home) 
      })
         
    }
   else if(req.url==="/contact"){
        res.end("Contact Page")  
    }
    else{
        res.end("Page NOT Found") 
    }

});


server.listen(5000,()=>{
    console.log("server is working")
});