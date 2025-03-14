const express = require('express'); 

const { Router } = require("express");

const messageRouter = Router();
messageRouter.use(express.urlencoded({ extended: true })); //parsing forum data to req.body

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

messageRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

messageRouter.post('/new', (req, res) => {

  messages.push({ text: req.body.messagetext, user: req.body.fname, added: new Date() });

  res.redirect("/");
})


module.exports = messageRouter;