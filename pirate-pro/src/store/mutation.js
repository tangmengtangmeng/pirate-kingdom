const mutations = {
	change (state) {
		state.locale = state.locale == "zh-ch" ? "en" : "zh-ch" ;
		i18n.locale = state.locale ;
	},
	initLang (state) {
		//判断浏览器设置的默认语言ie\opera,firefox\chrome
		console.log("IE浏览器默认语言",navigator.browserLanguage);
		console.log("google浏览器默认语言",navigator.language);
		if(navigator.language.indexOf("en") > -1 || navigator.browserLanguage.indexOf("en") > -1){
			state.locale = "en";
			i18n.locale = "en";
			console.log("浏览器初始化后改变语种",state.locale,i18n.locale);
		}else{

		}
	},
	login (state) {
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
			console.log("请先登录metamask");
		}
	}
}
export default mutations