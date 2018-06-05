import CaptainSell from '../util/contracts/CaptainSell'
import CaptainToken from '../util/contracts/CaptainToken'
import CaptainGameConfig from '../util/contracts/CaptainGameConfig'

const state = {
	// 全局变量
	show: false,
	locale: "zh-ch",
	username: "Login",
	myaccount: "",
	showheader: true,
	showfooter: true,
	showbigpopup: false,
	showsmallpopup: false,
	pricearr: [{price:"0.00"},{price:"0.00"},{price:"0.00"}],
	cardarr: [{soldamount:"0",totalamount:"30"},{soldamount:"0",totalamount:"30"},{soldamount:"0",totalamount:"30"}],
	buymsg: {
		myassets: "",
		setnickname: "",
		confirmbuycard: "",
		player: "",
		buycard: "",
	},
	alertmsg: {
		alert: ""
	},
	captain: [
		{
			name: "JACK",
			detail: "this is Jack.",
			color: "",
			attack: "",
			strength: "",
			defense: "",
			price: "0.00",
			unitSellable: "",
			totalcount: ""
		},
		{
			name: "JOANNA",
			detail: "this is Joanna.",
			color: "",
			attack: "",
			strength: "",
			defense: "",
			price: "0.00",
			unitSellable: "",
			totalcount: ""
		},
		{
			name: "CLOB",
			detail: "this is Clob.",
			color: "",
			attack: "",
			strength: "",
			defense: "",
			price: "0.00",
			unitSellable: "",
			totalcount: ""
		},
	],
	//合约参数
	CaptainGameConfig_abiarray: CaptainGameConfig.abi,
	CaptainGameConfig_address4: "0xfb8643685a0d7aa43d6db62b76d5f7afc88c2f13",
	CaptainSell_abiarray: CaptainSell.abi,
	CaptainSell_address4: "0xce85fb0091d7583f7fd2512e6e620d99f43e642e",
	CaptainToken_abiarray: CaptainToken.abi,
	CaptainToken_address4: "0xecde6184af55cd0103e4d8681d85230aca5f354d",
}

export default state