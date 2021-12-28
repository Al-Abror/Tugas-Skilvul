const express = require("express")
const res = require("express/lib/response")
const courseRoutes = require("./course")
const instructorsRoutes = require("./instructors")
const participantsRoutes = require("./participants")
// creates a new router instance.
const router = express.Router()

router.use("/course", courseRoutes)
router.use("/instructors", instructorsRoutes)
router.use("/participants", participantsRoutes)
router.get("/", (req, res) => {
  const ready = `<h3> Welcome to Tugas 31-Build-Web-Service-and-RESTful-API-with-ExpressJs-Mongoose</h3>`;
  res.status(200).send(ready);
});
    
module.exports = router