const { default: axios } = require("axios");

async function getUserDetails(req,res){
    try{
        const webHookUrl  = "https://webhook.site/d420a8ae-89b4-405f-89b7-20d366e193a0"
        const webHookResponse = {
            "message":"webHook responsed successfully",
            "data":req.body
        }

        const response = await axios.post(webHookUrl,webHookResponse)

        console.log(response.data);

        
        res.status(200).send({
            'message':'success'
        })
    }
    catch(error){
        console.log(error.message);
    }
}


async function gitWebHookCallback(req,res){
    try{
        console.log(req.body);
        res.status(200).send({
            'message':req.body
        })
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports = {
    getUserDetails,
    gitWebHookCallback
}