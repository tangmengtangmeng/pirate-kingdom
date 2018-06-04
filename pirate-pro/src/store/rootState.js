import CaptainSell from '../util/contracts/CaptainSell'
import CaptainToken from '../util/contracts/CaptainToken'
import CaptainGameConfig from '../util/contracts/CaptainGameConfig'

const state = {
	// 全局变量
	show: false,
	locale: "zh-ch",
	username: "Login",
	showheader: true,
	showfooter: true,
	showbigpopup: false,
	showsmallpopup: false,
	alertmsg: {
		login: "",
		login2: "",
		setname: "",
		changename: "",
		toolong: "",
		existed: "",
		networkerror: "",
	},
	myaccount: "",
	captain: [
		{
			name: "JACK",
			detail: "this is Jack.",
			color: "",
			attack: "",
			strength: "",
			defense: "",
			price: "",
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
			price: "",
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
			price: "",
			unitSellable: "",
			totalcount: ""
		},
	],
	//合约参数
	CaptainGameConfig_abiarray: CaptainGameConfig.abi,
	CaptainGameConfig_address4: "0x7c84f484967fec9ad949a624dfd3eca64f554b3a",
	
	

}

export default state