let service = {};

service.login = function(){
	//初始化web3对象
	if (typeof web3 !== 'undefined') {
	    web3 = new Web3(web3.currentProvider);
	} else {
	    // set the provider you want from Web3.providers
	    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8080"));
	}
	//获取以太账户
	var myaccount = web3.eth.accounts[0];
	if(myaccount){
		console.log(myaccount);
		axios.post("/").then(function(response){
			console.log(response);
		}).catch(function(err){
			console.log(err);
		})
	}else{
		alert("请先登录metamask");
	}
}

service.buycard = function(i){
	alert(i);
	//购买角色卡牌
	var data = {};
	axios.post("/",data).then(function(response){
		console.log(response);
	}).catch(function(error){
		console.log(error);
	})
}

export default service
