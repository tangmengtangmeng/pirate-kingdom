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
	}
}
export default mutations