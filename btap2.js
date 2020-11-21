var request = require('request');
function loadFile(url){
    return new Promise(function(resolve,reject){
        request(url,function(error,res,body){
            if(error){
                reject(error);
            }else{
                resolve(body);
            }
        })
    })
  }
  
  loadFile('https://jsonplaceholder.typicode.com/todos/1')
  .then(function(data){
    console.log(data);
  })
  .catch(function(error){
    console.log(error);
  })