// const {sendMessage,handleMessage} = require ('./lib/telegram');
// const {errorHandler} = require ('./lib/helper');

// async function handler(req,method){
//     try{
//         if(method === 'GET'){
//             return "hello get"
//         }
//         const {body } = req;
//         if(body & body.message){
//             const messageObj = body.message;
//             await handleMessage(messageObj);
//             return "success";
//         }
//         return "unknown request"
//     }
//     catch(error){
//         errorHandler(error,"mainIndexHandler")
//     }
// }
// module.exports = { handler};
