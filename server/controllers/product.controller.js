const key = require('../key.json')
const { google } = require('googleapis')

const auth = new google.auth.GoogleAuth({
    keyFile: 'gSheet.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
})
const client = auth.getClient();
const spreadsheetId = key.spreadsheetId;

const googleSheets = google.sheets({ version: "v4", auth: client })
const metaData = googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
})
// CRUD
module.exports = {
    // READ ALL
    findAll: async (req, res) => {

        const getRows = await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId,
            range: "All",
        })
        let rowsData = getRows.data.values
        let convertedData = []

        // last 15 rows representing the financial report dont need
        // row index 0 is table head which dont need
        for (let i = 1; i < rowsData.length - 15; i++) {

            if (rowsData[i][0] === 'Home') {
                let imageUrl = rowsData[i][19] || "https://synapse.it/wp-content/uploads/2020/12/test.png";
                let price = rowsData[i][18] || "$999.99"

                let product = {
                    status: rowsData[i][0],
                    id: i,
                    dataAdded: rowsData[i][1],
                    brand: rowsData[i][3],
                    name: rowsData[i][5],
                    color: rowsData[i][6],
                    PID: rowsData[i][4],
                    size: rowsData[i][7],
                    price: price,
                    imageUrl:imageUrl,
                }
                convertedData.push(product);
            }
        }


        res.json({ convertedData })
    }
}