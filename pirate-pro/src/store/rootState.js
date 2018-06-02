import CaptainSell from '../util/contracts/CaptainSell'
import CaptainToken from '../util/contracts/CaptainToken'

const state = {
	// 全局变量
	show: false,
	locale: "zh-ch",
	username: "login",
	showheader: true,
	showfooter: true,
	showbigpopup: false,
	myaccount: "",
	//合约参数
	captaintoken_abiarray: CaptainToken.abi,
	captaintoken_address4: "0x4da56128e247136423a07ecccb420c71f9ea45df",
}

export default state