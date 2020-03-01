const express = require("express");
const router = express.Router();
const mainController = require("../controller/mainController");
const upload = require("../../config/multer");

router.get("/",  mainController.getAllMusics);
router.post("/", upload.upload.single("music"), mainController.addNewMusic);
router.delete("/:musicId", mainController.deleteMusic);

module.exports = router;