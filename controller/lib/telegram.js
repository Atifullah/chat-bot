
// const {getAxiosInstanse} =require('./axios');
// const {errorHandler} = require('./helper');

// const My_token = '7085564313:AAECW_irDnPn_IYDjGtMZF8w7xGz5hAeUsE';
// const BASE_URL = `https://api.telegram.org/bot${My_token}`;
// const axiosInstanse = getAxiosInstanse(BASE_URL);

// function sendMessage(chatId, messageText) {
//     return axiosInstanse.post('sendMessage', {
//             chat_id: chatId,
//             text: messageText,
//         })
//         .catch((ex) => {
//             errorHandler(ex, "sendMessage", "axios");
//         });
// }

// async function handleMessage(messageObj){
//     const messagetext = messageObj.text || "";
//     if(!messagetext){
//         errorHandler("no message text",handleMessage)
//         return"";
//     }
//     try{
//         const chatId = messageObj.chat.id;
//         if(messagetext.charAt(0) === "/"){
//             const command = messagetext.substr(1);
//             switch (command){
//                 case "start":
//                     return sendMessage (
//                         chatId,
//                         "Hi Im a bitnasdaq Bot i can help you to solve your issues"
//                     );
//                     default:
//                         {
//                             return sendMessage (chatId,"hey i dont know the command")
//                         }
//             }

//         }
//         else{
//            return  sendMessage(chatId,messagetext)
//         }
//     }
//     catch(error){
//         errorHandler(error,"handlemessage")
//     }
// }
// module.exports={sendMessage,handleMessage};