const express = require("express");
const multer = require("multer");
const { handleFileUpload, handleGoogleSheet } = require("../controllers/urlController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), handleFileUpload);
router.post("/google-sheet", handleGoogleSheet);

module.exports = router;