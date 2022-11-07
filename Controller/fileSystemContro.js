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

module.exports = {
  creatingFile
};
