const actions = {
	change(context){
		context.commit("change");
	},
	initLang(context){
		context.commit("initLang");
	},
	hideheader(context){
		context.commit("hideheader");
	},
	showbigpopup(context){
		context.commit("showbigpopup");
	}
}

export default actions