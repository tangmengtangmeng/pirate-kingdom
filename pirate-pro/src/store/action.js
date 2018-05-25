const actions = {
	change(context){
		context.commit(change);
	},
	init(context,params){
		alert(params);
		if (typeof web3 !== 'undefined') {
		    web3 = new Web3(web3.currentProvider);
		} else {
		    // set the provider you want from Web3.providers
		    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8080"));
		}
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
}

export default actions