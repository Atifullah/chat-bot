// function errorHandler(error,name,from){
//     let loggerFunction = console.log;

//     loggerFunction("==========start========")

//     loggerFunction("occur in the error name",name)

//     if(from === "axios"){
//         if(error.response){
//             loggerFunction(error.response.data)
//             loggerFunction(error.response.status)
//             loggerFunction(error.response.header)

//         }
//         else if( error.request){
//             loggerFunction(error.request)
//         }
//         else{
//             loggerFunction("error",error.message)
//         }
//         loggerFunction(error.toJSON());
//     }
//     else{
//         loggerFunction(error)
//     }

//     loggerFunction("==========end========")
// }

// module.exports={
//     errorHandler
// }