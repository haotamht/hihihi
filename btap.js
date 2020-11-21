const axios = require('axios').default;

function get(url,url1,callback)
{
    axios.get(url)
    .then((data)=>{
        console.log(data.data);
        callback(url1);
    })
}
function get2(url)
{
    axios.get(url)
    .then((data)=>{
        console.log(data.data);
    })
}
get('https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/todos/2',get2)