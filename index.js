const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000
const HOST = '0.0.0.0'; 
const app = express()


app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.status(200).send({
        'message':"success"
    })
})
app.use('/api/manage',require('./routes/webHook.route'))

app.listen(PORT, (req,res)=>{
    console.log(`http://${HOST}:${PORT}`);
})