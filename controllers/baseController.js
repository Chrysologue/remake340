const utilities = require("../utilities/index")
const baseController = {}

baseController.buildHome = async function (req, res) {
    const nav = await utilities.getNav()
    res.render("index", {
        nav,
        title: "Home",
    })
}
module.exports = baseController