const actions = {
	change(context){
		context.commit("change");
	},
	initLang(context){
		context.commit("initLang");
	},
	login(context,params){
		context.commit("login");
	}
}

export default actions