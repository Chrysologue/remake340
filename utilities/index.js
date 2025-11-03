const invModel = require("../models/inventory-model")

const Util = {}

Util.getNav = async function () {
    const data = await invModel.getClassification()
    let nav = "<ul>"
    data.rows.forEach(item => {
        nav += `<li>
            <a href="inv/type/${item.classification_id}" title="See our inventory of ${item.classification_name} vehicles">
            ${item.classification_name}
            </a>
        </li>`
    });
    nav += "</ul>"
    return nav
}

module.exports = Util