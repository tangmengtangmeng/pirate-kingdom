import configData from "./configData"
import store from '../store/store'


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
	store.state.myaccount = web3.eth.accounts[0];
	var myaccount = store.state.myaccount;
	//登录海盗游戏用户
	if(myaccount){
		console.log("本地账户地址是：",myaccount);
		var url=configData.base_url+configData.get_username;
		var tokenstr = myaccount.toString();
		axios.post(url, {token: tokenstr}).then(function(result){
			console.log("成功",result);
			if(!result.data.data.name){
				alert("请设置账户昵称");
				store.state.username = tokenstr.slice(0,5);
				console.log("用户名",store.state.username);
			}else{
				store.state.username = result.data.data.name.slice(0,5);
				console.log("我的昵称是",result.data.data.name);
			}
		}).catch(function(err){
			console.log("失败",err);
		})
	}else{
		alert("请先登录metamask");
	}

}

service.buycard = function(i){
	//购买角色卡牌
	var url=configData.base_url+configData.get_username;
	var tokenstr = i.toString();
	axios.post(url,{token:tokenstr}).then(function(response){
		console.log(response);
	}).catch(function(error){
		console.log(error);
	})
}

service.myassets = function(){

}

service.setnickname = function(nameObj){
	//注册用户
	if(document.cookie.indexOf("invite_uid") > -1){
		console.log("cookie",document.cookie);
	}else{
		var registerurl = configData.base_url+configData.register;
		axios.post(registerurl,{token:store.state.myaccount}).then(function(response){
			console.log(response);
		}).catch(function(error){
			console.log(error);
		})
		store.state.username = "login";
		var invite_uid = Math.round(Math.random()*10).toString() + Math.round(Math.random()*10).toString() + Math.round(Math.random()*10).toString() + Math.round(Math.random()*10).toString() + Math.round(Math.random()*10).toString();
		document.cookie = "invite_uid="+invite_uid;
	}
	//设置新的用户昵称
	var username = nameObj.name.toString();
	var tokenstr = store.state.myaccount;
	var newsignature = web3.toHex("new"+username);
	console.log("十六进制",username,tokenstr,newsignature);
	var url = configData.base_url + configData.set_username;
	var address = store.state.myaccount;
	web3.currentProvider.sendAsync({
		id: 1,
		method: 'personal_sign',
		params: [
		address,
			web3.toHex('magic_academy_change_name:' + username)
		]
	}, function(err, result) {
		if(!result.error){
		  let postData = {name: username,token: tokenstr,signature:result.result};
		  console.info(postData);
		  axios.post(url, postData).then(function (response) {
			console.log("设置用户名",response);
			store.state.username = response.data.data.name;
		  }).catch(function (error) {
		    console.log(error);
		  });
		}
	});
}

export default service
