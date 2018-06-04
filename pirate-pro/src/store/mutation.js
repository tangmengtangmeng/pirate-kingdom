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
	showheader (state) {
		//显示头部底部
		state.showheader = true;
		state.showfooter = true;
	},
	hideheader (state) {
		//隐藏头部底部
		state.showheader = false;
		state.showfooter = false;
	},
	showbigpopup (state) {
		state.showbigpopup = true;
	},
	showsmallpopup (state) {
		state.showsmallpopup = true;
	},
	closebigpopup (state) {
		state.showbigpopup = false;
	},
	closesmallpopup (state) {
		state.showsmallpopup = false;
	},
	clearsmallpopup (state) {
		state.alertmsg.login = "";
		state.alertmsg.login2 = "";
		state.alertmsg.setname = "";
		state.alertmsg.changename = "";
		state.alertmsg.toolong = "";
		state.alertmsg.existed = "";
		state.alertmsg.networkerror = "";
	}
}
export default mutations