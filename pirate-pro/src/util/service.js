import configData from "./configData"
import store from '../store/store'
import CaptainSell from './contracts/CaptainSell'
import CaptainToken from './contracts/CaptainToken'
import CaptainGameConfig from './contracts/CaptainGameConfig'


let service = {};

service.init = function(){

	console.log("初始化海盗网站cookie:",document.cookie);
	console.log("初始化海盗网站nicheng：",sessionStorage.getItem("昵称"));
	console.log("初始化海盗网站yitaifang：",sessionStorage.getItem("我的以太坊账户"));
	console.log("初始化海盗网站shuaxin：",sessionStorage.getItem("F5"));

	//初始化web3对象
	if (typeof web3 !== 'undefined') {
	    web3 = new Web3(web3.currentProvider);
	} else {
	    // set the provider you want from Web3.providers
	    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8080"));
	}

	//判断以太坊的网络线路
	var version = web3.version.network;
	var CaptainGameConfig = web3.eth.contract(store.state.CaptainGameConfig_abiarray);
	var CaptainGameConfigInstance = "";
	if(version == 4){
		CaptainGameConfigInstance = CaptainGameConfig.at(store.state.CaptainGameConfig_address4);
	}else{
		CaptainGameConfigInstance = CaptainGameConfig.at(store.state.CaptainGameConfig_address4);
	}
	console.log("以太坊初始化后metamask账户的值是：",web3.eth.accounts[0]);
	if(web3.eth.accounts[0]){
		sessionStorage.setItem("我的以太坊账户",web3.eth.accounts[0]);
	}
	
	//获取角色卡牌信息
	CaptainGameConfigInstance.getCardInfo(1,function(error,result){
		if(!error){
			console.log(result);
			store.state.captain[0].color = result[0].toString();
			store.state.captain[0].attack = result[1].toString();
			store.state.captain[0].strength = result[2].toString();
			store.state.captain[0].defense = result[3].toString();
			store.state.captain[0].price = web3.fromWei(parseFloat(result[4]),"ether");
			store.state.captain[0].unitSellable = result[5].toString();
			store.state.captain[0].totalcount = result[6].toString();
			store.state.pricearr[0].price = store.state.captain[0].price;
			store.state.cardarr[0].totalamount =  store.state.captain[0].totalcount;
		}else{
			console.log(error);
		}
	})
	CaptainGameConfigInstance.getCardInfo(2,function(error,result){
		if(!error){
			console.log(result);
			store.state.captain[1].color = result[0].toString();
			store.state.captain[1].attack = result[1].toString();
			store.state.captain[1].strength = result[2].toString();
			store.state.captain[1].defense = result[3].toString();
			store.state.captain[1].price = web3.fromWei(parseFloat(result[4]),"ether");
			store.state.captain[1].unitSellable = result[5].toString();
			store.state.captain[1].totalcount = result[6].toString();
			store.state.pricearr[1].price = store.state.captain[1].price;
			store.state.cardarr[1].totalamount =  store.state.captain[1].totalcount;
		}else{
			console.log(error);
		}
	})
	CaptainGameConfigInstance.getCardInfo(3,function(error,result){
		if(!error){
			console.log(result);
			store.state.captain[2].color = result[0].toString();
			store.state.captain[2].attack = result[1].toString();
			store.state.captain[2].strength = result[2].toString();
			store.state.captain[2].defense = result[3].toString();
			store.state.captain[2].price = web3.fromWei(parseFloat(result[4]),"ether");
			store.state.captain[2].unitSellable = result[5].toString();
			store.state.captain[2].totalcount = result[6].toString();
			store.state.pricearr[2].price = store.state.captain[2].price;
			store.state.cardarr[2].totalamount =  store.state.captain[2].totalcount;
		}else{
			console.log(error);
		}
	})
	//获取当前各种卡牌已卖出的数量
	var CaptainSell = web3.eth.contract(store.state.CaptainSell_abiarray);
	var CaptainSellInstance = "";
	if(version == 4){
		CaptainSellInstance = CaptainSell.at(store.state.CaptainSell_address4);
	}else{
		CaptainSellInstance = CaptainSell.at(store.state.CaptainSell_address4);
	}
	CaptainSellInstance.getCaptainCount(1,function(error,result){
		if(!error){
			console.log(result);
			store.state.cardarr[0].soldamount = result.toString();
		}else{
			console.log(error);
		}
	})
	CaptainSellInstance.getCaptainCount(2,function(error,result){
		if(!error){
			console.log(result);
			store.state.cardarr[1].soldamount = result.toString();
		}else{
			console.log(error);
		}
	})
	CaptainSellInstance.getCaptainCount(3,function(error,result){
		if(!error){
			console.log(result);
			store.state.cardarr[2].soldamount = result.toString();
		}else{
			console.log(error);
		}
	})
	//获取当前区块GAS价格
	web3.eth.getGasPrice(function(error,result){
		if(!error){
			console.log(result);
			console.log("当前GAS价格是：",web3.fromWei(parseFloat(result),'microether')+"microether");
		}else{
			console.log(error)
		}
	})

	//判断用户是否已经登录过
	service.confirmlogin();

	//如果登录了metamask就获取用户卡牌数量
	service.getmycards();
}

service.confirmlogin = function(){
    //判断用户是否已经登录过
	if(sessionStorage.getItem("昵称")){
		console.log("用户已经登录过",sessionStorage.getItem("昵称"));
		if(web3.eth.accounts[0]){
			store.state.username = sessionStorage.getItem("昵称");
			console.log("9999999999",sessionStorage.getItem("F5"));
		}else{
			if(sessionStorage.getItem("F5") != "f"){
				store.state.username = sessionStorage.getItem("昵称");
				console.log("9999999999",sessionStorage.getItem("F5"));
			}else{
				store.state.username = "Login";
				console.log("9999999999",sessionStorage.getItem("F5"));//
			}
			
		}
		
	}
}

service.login = function(){
	//获取以太账户
	if(web3.eth.accounts[0]){
		store.state.myaccount = web3.eth.accounts[0];
		sessionStorage.setItem("我的以太坊账户",store.state.myaccount);
		console.log("本地以太账户地址是：",store.state.myaccount);//0xf3e01b7b5961d6ffa0ef6521556e3aa7141622b0
	}else{
		store.state.myaccount = "";
	}
	
	//注册用户
	if(document.cookie.indexOf("invite_uid") > -1){
		console.log("本地已有cookie",document.cookie);
	}else{
		var registerurl = configData.base_url+configData.register;
		axios.post(registerurl,{token:store.state.myaccount}).then(function(response){
			console.log(response);
		}).catch(function(error){
			console.log(error);
		})
		store.state.username = "Login";
		var invite_uid = Math.round(Math.random()*10).toString() + Math.round(Math.random()*10).toString() + Math.round(Math.random()*10).toString() + Math.round(Math.random()*10).toString() + Math.round(Math.random()*10).toString();
		document.cookie = "invite_uid="+invite_uid;
	}
	//登录海盗游戏用户
	if(store.state.myaccount){
		sessionStorage.setItem("我的以太坊账户",store.state.myaccount);
		var url=configData.base_url+configData.get_username;
		var tokenstr = store.state.myaccount.toString();
		axios.post(url, {token: tokenstr}).then(function(result){
			console.log("成功",result);
			if(!result.data.data.name){
				store.state.username = tokenstr.slice(0,5);
				console.log("用户名",store.state.username);
			}else{
				store.dispatch("showsmallpopup");
				store.state.alertmsg.alert = "登录成功,点击用户名设置昵称.";
				store.state.username = result.data.data.name.slice(0,5);
				console.log("我的昵称是",result.data.data.name);
			}
			sessionStorage.setItem("昵称",store.state.username);
			console.log("我的昵称在缓存中：",sessionStorage.getItem("昵称"));
			//存储登录日志
			var setlogurl = configData.base_url+configData.setlog;
			var logdata = {address:store.state.myaccount};
			var logstr = JSON.stringify(logdata);
			axios.post(setlogurl,{type:4,data:logstr}).then(function(result){
				console.log("登录日志存储成功",result,setlogurl);
			}).catch(function(err){
				console.log(err);
			})
		}).catch(function(err){
			console.log("失败",err);
		})
	}else{
		store.dispatch("showsmallpopup");
		store.state.alertmsg.alert = "请先登录metamask.";
		store.state.username = "Login";
		sessionStorage.setItem("F5","f");
	}
}

service.buycard = function(i){
	console.log(i);
	//获取以太账户
	store.state.myaccount = web3.eth.accounts[0];
	if(!store.state.myaccount){
		store.dispatch("showsmallpopup");
		store.state.alertmsg.alert = "请先登录metamask.";
		store.state.username = "Login";
		sessionStorage.setItem("F5","f");
	}else if(store.state.username.indexOf("Login") > -1){
		store.dispatch("showsmallpopup");
		store.state.alertmsg.alert = "请先登录.";
	}else{
		//购买卡牌
		//判断以太坊的网络线路
		var version = web3.version.network;
		var CaptainSell = web3.eth.contract(store.state.CaptainSell_abiarray);
		var CaptainSellInstance = "";
		var CaptainToken = web3.eth.contract(store.state.CaptainToken_abiarray);
		var CaptainTokenInstance = "";
		let transaction = {
		    from: store.state.myaccount,
		    to: store.state.CaptainSell_address4, 
		    value: web3.toWei(store.state.captain[0].price,"ether")
		};
		if(i == 2){
			transaction.value = web3.toWei(store.state.captain[1].price,"ether");
		}else if(i == 3){
			transaction.value = web3.toWei(store.state.captain[2].price,"ether");
		}
		if(version == 4){
			CaptainSellInstance = CaptainSell.at(store.state.CaptainSell_address4);
			CaptainTokenInstance = CaptainToken.at(store.state.CaptainToken_address4);
		}else{
			CaptainSellInstance = CaptainSell.at(store.state.CaptainSell_address4);
			CaptainTokenInstance = CaptainToken.at(store.state.CaptainToken_address4);
		}
		CaptainSellInstance.prepurchase(i,transaction,function(error,result){
			if(!error){
				console.log("购买结果是：",result);
				store.dispatch("showsmallpopup");
				store.state.alertmsg.alert = "交易进行中，请等待卡牌购买结果...";
			}else{
				console.log(error);
			}
		})
		//监听购买事件
		CaptainSellInstance.BuyToken(store.state.myaccount).watch(function(error,result){
			if(!error){
				console.log("购买成功后返回的结果是：",result);
				store.dispatch("showsmallpopup");
				store.state.alertmsg.alert = "交易成功,可在我的卡牌中查看.";
				//存储玩家购买卡牌日志
				var buyurl = configData.base_url+configData.setlog;
				var buydata = {
					from_address: store.state.myaccount,
					to_address: store.state.CaptainSell_address4,
					item_type: 1,
					item_id: i,
					transaction_by: 1,
					item_num: 1,
					ether_num: web3.fromWei(transaction.value,"ether"),
					coin_type: 1
				};
				var buystr = JSON.stringify(buydata);
				axios.post(buyurl,{type:1,data:buystr}).then(function(result){
					console.log(result);
				}).catch(function(err){
					console.log(err);
				})
				//刷新卡牌卖出数量
				CaptainSellInstance.getCaptainCount(i,function(error,result){
					if(!error){
						console.log(result);
						store.state.cardarr[i -1].soldamount = parseInt(result.toString());

					}else{
						console.log(error);
					}
				})
				//重新获取我的卡牌列表
				service.getmycards();
			}else{
				console.log(error);
			}
		})
		
		//获取某种卡牌的token列表
		CaptainTokenInstance.tokensOfCaptain(i,function(error,result){
			if(!error){
				console.log("该种卡牌的token列表是：",result);
			}else{
				console.log(error);
			}
		})
	}
}

service.myassets = function(){

	if(store.state.username.indexOf("Login")>-1){
		if(!web3.eth.accounts[0]){
			store.dispatch("showsmallpopup");
			store.state.alertmsg.alert = "请先登录metamask."
			store.state.username = "Login";
			sessionStorage.setItem("F5","f");
		}else{
			store.dispatch("showsmallpopup");
			store.state.alertmsg.alert = "请先登录."
		}
	}else{
		if(!web3.eth.accounts[0]){
			store.dispatch("showsmallpopup");
			store.state.alertmsg.alert = "请先登录metamask."
			store.state.username = "Login";
			sessionStorage.setItem("F5","f");
			return;
		}
		//账户地址拥有的卡牌数
		service.showbigpopup();
		service.getmycards();
	}
}

service.getmycards = function(){
	
	if(web3.eth.accounts[0]){
		store.state.myaccount = web3.eth.accounts[0];
	}else{
		if(sessionStorage.getItem("我的以太坊账户")){
			store.state.myaccount = sessionStorage.getItem("我的以太坊账户");
		}else{
			store.state.myaccount = sessionStorage.getItem("我的以太坊账户");
		}
	}
	
	//账户地址拥有的卡牌数组
	var CaptainToken = web3.eth.contract(store.state.CaptainToken_abiarray);
	var CaptainTokenInstance = "";
	var version = web3.version.network;
	if(version == 4){
		CaptainTokenInstance = CaptainToken.at(store.state.CaptainToken_address4);
	}else{
		CaptainTokenInstance = CaptainToken.at(store.state.CaptainToken_address4);
	}
	CaptainTokenInstance.tokensOfOwner(store.state.myaccount,function(error,result){
		if(!error){
			console.log("该地址拥有的卡牌数组是：",result);
			store.dispatch("clearmycaptain");
			for(var i=0;i<result[1].length;i++){
				if(result[1][i].toString() == 1){
					store.state.mycaptain1.push("1");
				}else if(result[1][i].toString() == 2){
					store.state.mycaptain2.push("1");
				}else if(result[1][i].toString() == 3){
					store.state.mycaptain3.push("1");
				}

			}
		}else{
			console.log(error);
		}
	})
	console.log("我的船长1数组：",store.state.mycaptain1);
	console.log("我的船长2数组：",store.state.mycaptain2);
	console.log("我的船长3数组：",store.state.mycaptain3);
}

service.showbigpopup = function(){
	//展示我的卡牌列表
	store.dispatch("showbigpopup");
	store.state.buymsg.myassets = true; 
}

service.setnickname = function(){
	//获取以太账户
	store.state.myaccount = web3.eth.accounts[0];
	if(!store.state.myaccount){
		store.dispatch("showsmallpopup");
		store.state.alertmsg.alert = "请先登录metamask."
		store.state.username = "Login";
		sessionStorage.setItem("F5","f");
		return;
	}
	//设置新的用户昵称
	store.dispatch("showbigpopup");
    store.state.buymsg.setnickname = true;
}

service.changenickname = function(nameObj){
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
			web3.toHex('pirate_change_name:' + username)
		]
	}, function(err, result) {
		if(!result.error){
		  let postData = {name: username,token: tokenstr,signature:result.result};
		  console.info(postData);
		  axios.post(url, postData).then(function (response) {
			console.log("设置用户名",response);
			if(response.data.state == 200){
				store.dispatch("showsmallpopup");
				store.state.alertmsg.alert = "修改用户名成功.";
				store.state.username = username.slice(0,5);
				sessionStorage.setItem("昵称",store.state.username);
				console.log("我的昵称在缓存中：",sessionStorage.getItem("昵称"));
			}else if(response.data.state == 10003){
				store.dispatch("showsmallpopup");
				store.state.alertmsg.alert = "设置昵称过长.";
			}else if(response.data.state == 10004){
				store.dispatch("showsmallpopup");
				store.state.alertmsg.alert = "该昵称已经存在.";
			}else if(response.data.state == 500){
				store.dispatch("showsmallpopup");
				store.state.alertmsg.alert = "服务器内部错误.";
			}
			
		  }).catch(function (error) {
		    console.log(error);
		  });
		}
	});
}





export default service
