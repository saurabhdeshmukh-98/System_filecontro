const fileController = require("../Controller/fileSystemContro");
const router = require("express").Router();
router.post("/generateFile", fileController.creatingFile);
router.get('/read',fileController.readingFile);
router.post('/throw',fileController.shiftingFile);


module.exports = router;
