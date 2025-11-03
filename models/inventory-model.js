const pool = require("../database/index")
/* ***************************
 *  Get all classification data
 * ************************** */
async function getClassification(){
    const query = `SELECT * FROM classification ORDER BY classification_name`
    return await pool.query(query)
}

module.exports = {getClassification}