let express = require("express");
let router = express.Router();
let db = require("../models");


router.get("/", (req, res) => {
  db.Burger.findAll({
    include: [ db.Customer ],
    raw: true,
    order:[
      ['burger_name', 'ASC']
    ]
  }).then((dbburgers) => {
    console.log(JSON.stringify(dbburgers));
    res.render("index", { burgers:dbburgers });
  });
});

router.post("/api/burgers", (req, res) => {
  db.Burger.create({
    burger_name: req.body.name,
    devoured: req.body.devoured
  }).then((dbBurger) => {
    res.json(dbBurger);
  });
});

router.put("/api/burgers/:id", (req, res) => {
  db.Customer.create({
    customer_name: req.body.customer_name,
    burger_id: req.params.id
  },
  {
    where: {id: req.params.id}
  });
  db.Burger.update(
    {
      devoured: req.body.devoured,
    },
    {
      where: {
        id: req.params.id
      }
    }).then((dbBurger) => {
      res.json(dbBurger);
    });
});

module.exports = router;