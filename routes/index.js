const express = require('express'); 

const { Router } = require("express");

const messageRouter = Router();
messageRouter.use(express.urlencoded({ extended: true })); //parsing forum data to req.body

const messages = [
  {
    text: "Ahoy Minoy.",
    user: "Bob",
    addedDate: "3/1/2025",
    addedTime: "1:00 PM"
  },
  {
    text: "Peace Out!",
    user: "Tom",
    addedDate: "3/14/2025",
    addedTime: "6:00 AM"
  },
];

messageRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

messageRouter.post('/new', (req, res) => {

  const timeOptions = { 
    hour: 'numeric', 
    minute: '2-digit', 
    hour12: true 
  };

  const now = new Date();

  const formattedDate = now.toLocaleDateString('en-US');
  const formattedTime = now.toLocaleTimeString('en-US', timeOptions);

  messages.push({ text: req.body.messagetext, user: req.body.fname, addedDate: formattedDate, addedTime: formattedTime });

  res.redirect("/");
})


module.exports = messageRouter;