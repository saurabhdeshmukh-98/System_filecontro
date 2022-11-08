const { json } = require("body-parser");
const appConst = require("../router/constants");
const fs = require("fs").promises;

const creatingFile = (req, res) => {
  const { fname, data } = req.body;
  try {
    const resp = fs.writeFile(fname, data);
    res.status(200).json({
      status: appConst.status.success,
      response: resp,
      message: "sucssefully saved..",
    });
  } catch (error) {
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: "sorry it is not find..",
    });
  }
};
const readingFile = (req, res) => {
  const { path } = req.body;
  try {
    const resp = fs.readFile(path);
    res.status(200).json({
      status: appConst.status.success,
      response: resp,
      message: "reading successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: "sorry...some thing wrong ",
    });
  }
};
const shiftingFile = (req, res) => {
  const { source, destination } = req.body;
  try {
    const resp = fs.rename(source, destination);
    res.status(200).json({
      status: appConst.status.success,
      response: resp,
      message: "it is shifted..",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: "it is not shifted..",
    });
  }
};
module.exports = {
  creatingFile,
  readingFile,
  shiftingFile
};
