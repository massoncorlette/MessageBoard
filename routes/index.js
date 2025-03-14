const { Router } = require("express");

const messageRouter = Router();

messageRouter.get('/new', (req, res) => {
  res.render('form'); 
});