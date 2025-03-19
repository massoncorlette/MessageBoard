const express = require("express");

const { Router } = require("express");

const indexRouter = Router();
indexRouter.use(express.urlencoded({ extended: true })); //parsing forum data to req.body

const messages = [
  {
    text: "Hoy Minoy.",
    user: "xXBob123Xx",
    addedDate: "3/1/2025",
    addedTime: "1:00 PM",
    color: "rgb(191, 64, 255)"
  },
  {
    text: "Peace Out!",
    user: "TomAnderson",
    addedDate: "3/14/2025",
    addedTime: "6:00 AM",
    color:" rgb(255, 102, 0)"
  },
];

const vividColors = [
  "rgb(255, 255, 0)",  
  "rgb(204, 255, 0)", 
  "rgb(0, 255, 255)",  
  "rgb(255, 20, 147)",
  "rgb(255, 102, 0)",  
  "rgb(191, 64, 255)", 
  "rgb(255, 0, 0)",    
  "rgb(255, 255, 255)" ,
  "rgb(173, 255, 47)",  
  "rgb(255, 215, 0)",   
  "rgb(250, 128, 114)",
  "rgb(0, 255, 0)",    
  "rgb(139, 0, 255)",  
  "rgb(255, 165, 0)",   
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});


indexRouter.post("/new", (req, res) => {
  const timeOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const now = new Date();
  const randomColor = vividColors[Math.floor(Math.random() * vividColors.length)];


  const formattedDate = now.toLocaleDateString("en-US");
  const formattedTime = now.toLocaleTimeString("en-US", timeOptions);

  messages.push({
    text: req.body.messagetext,
    user: req.body.fname,
    addedDate: formattedDate,
    addedTime: formattedTime,
    color: randomColor
  });

  res.redirect("/");
});

module.exports = indexRouter;
