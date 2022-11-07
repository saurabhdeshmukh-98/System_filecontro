const fileController = require("../Controller/fileSystemContro");
const router = require("express").Router();
router.post("/generateFile", fileController.creatingFile);

module.exports = router;
