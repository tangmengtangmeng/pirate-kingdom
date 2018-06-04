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
	showbigpopup(context){
		context.commit("showbigpopup");
	},
	showsmallpopup(context){
		context.commit("showsmallpopup");
		context.commit("closebigpopup");
	},
	closebigpopup(context){
		context.commit("closebigpopup");
	},
	closesmallpopup(context){
		context.commit("closesmallpopup");
	},
	clearsmallpopup(context){
		context.commit("clearsmallpopup");
	}
}

export default actions