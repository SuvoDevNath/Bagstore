const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

// Route to create a new owner (only in development)
if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .status(500)
        .send("You don't have the permission to create a new owner");
    }

    let { fullname, email, password } = req.body;

    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });

    // Redirect with a query param as success message
    res.redirect("/owners/admin?success=Owner created successfully!");
  });
}

// Admin page (form to create product or owner)
router.get("/admin", function (req, res) {
  let success = req.flash("success")  ;
  res.render("createproducts", { success });
});

module.exports = router;
