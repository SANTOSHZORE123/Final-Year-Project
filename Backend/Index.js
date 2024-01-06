const express=require('express')

const app=express()
const bodyParser = require('body-parser');
const { execSync } = require('child_process');
app.use(bodyParser.json());
const router=require("./routes")

const PORT=3000

app.use("/",router)

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

