const request = require('request');
const readlineSync = require('readline-sync');
var api = readlineSync.question('Nhap api: ');
var rq = '';
function requestget(api,fn){
	var URL1='https://api.rentcode.net/api/v2/order/request?apiKey='+api+'&ServiceProviderId=11';
	request.get(URL1, (error, res, body)=>{
		if(error)
		{
			return fn(error,null);
		}
		else{
			return fn(null,JSON.parse(body).id);
		}
		//return rq;
	});
	
}
requestget(api,(error,results)=>{
	if(error){
		return error;
	}
	else{
		return rq = results;
	}
	
});

/*function oderId(api,fx){
	var URL2 = 'https://api.rentcode.net/api/v2/order/'+rq+'/check?apiKey='+api;
	request.get(URL2, (error, res, body)=>{
		if(error)
		{
			return fx(error,null);
		}
		return fx(null,JSON.parse(body).phoneNumber);
	});
}
oderId(api,(error,results)=>{
	if(error){
		return console.log(error);
	}
	return console.log(results);
	
	
})*/
setTimeout(()=>{
	function oderId(api,fx){
		var URL2 = 'https://api.rentcode.net/api/v2/order/'+rq+'/check?apiKey='+api;
		request.get(URL2, (error, res, body)=>{
			if(error)
			{
				return fx(error,null);
			}
			return fx(null,JSON.parse(body).phoneNumber);
		});
	}
	
	
	oderId(api,(error,results)=>{
		if(error){
			return console.log(error);
		}
		return console.log(results);
		
	})
},25000);