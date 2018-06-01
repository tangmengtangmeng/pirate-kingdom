const actions = {
	change(context){
		context.commit("change");
	},
	initLang(context){
		context.commit("initLang");
	},
	showheader(context){
		context.commit("showheader");
	},
	hideheader(context){
		context.commit("hideheader");
	},
	showbigpopup(context,params){
		context.commit("showbigpopup",params);
	},
	closebigpopup(context){
		context.commit("closebigpopup");
	},
}

export default actions