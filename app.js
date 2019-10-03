
const express = require("express");
const QR = require("qrcode");
const path = require("path");
const fs = require("fs");
// Express init app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, "public")));

app.get('/api/gen-qrcode', (req, res) => {

    if (req.query) {
        console.log(req.query.message)
        if (req.query.message) {
            // Generate qrcode
            QR.toString(req.query.message, { type: "svg"},(error, value) => {
                if (error) {
                    res.status(500).json({
                        status: "error",
                        message: "error create qr-code"
                    })        
                } else {
                    res.status(200).json({
                        status: "success",
                        value    
                    })
                }
            })
            
        } else {
            res.status(400).json({
                status: "error",
                message: "missing message parameter"
            })
        }
    }
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`server up and running on port ${PORT}`)
})