const express=require('express')
const router=express.Router()
const bodyParser = require('body-parser');
const { execSync } = require('child_process');
router.post('/crash',(req,res)=>{
    try {
        // Extract input data from the request body
        const inputData = req.body;

        // Run the Python script to load the model and make predictions
        const pythonScript = `python load_model.py ${inputData.safety_Score} ${inputData.Days_Since_Inspection} ${inputData.Total_Safety_Complaints} ${inputData.Control_Metric} ${inputData.Turbulence_In_gforces} ${inputData.Cabin_Temperature} ${inputData.Accident_Type_Code} ${inputData.Max_Elevation} ${inputData.Violations} ${inputData.Adverse_Weather_Metric}`;
        const outputData = JSON.parse(execSync(pythonScript).toString());

        // Send the model's output back to the client
        res.json({ result: outputData });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.post('/severity',(req,res)=>{
    try {
        // Extract input data from the request body
        const inputData = req.body;

        // Run the Python script to load the model and make predictions
        const pythonScript = `python severity_model.py ${inputData.safety_Score} ${inputData.Days_Since_Inspection} ${inputData.Total_Safety_Complaints} ${inputData.Control_Metric} ${inputData.Turbulence_In_gforces} ${inputData.Cabin_Temperature} ${inputData.Accident_Type_Code} ${inputData.Max_Elevation} ${inputData.Violations} ${inputData.Adverse_Weather_Metric}`;
        const outputData = JSON.parse(execSync(pythonScript).toString());

        // Send the model's output back to the client
        res.json({ result: outputData });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
module.exports=router