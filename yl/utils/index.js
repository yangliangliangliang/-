//过滤特殊字符
export function stripscript(s) {
	var s = s || ""
    var pattern = new RegExp("[-+%_*`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < s.length; i++) {
      rs = rs + s.substr(i, 1).replace(pattern, '');
    }
    return rs;
}


//注册密码长度
export const verifyPhone = data=>{
	if(this.password.length < 6){
		uni.showToast({
			icon: 'none',
			title: '密码长度至少6位'
		});
		return;
	}
}


//分拣comCup = 
export class Parameter{
	constructor(itemInfo){
		this.comCup = itemInfo.comCup
		this.comSlot = itemInfo.comSlot
		this.comT = itemInfo.comT
		this.comMemory = itemInfo.comMemory
	}
}

export class Advantage{
	constructor(itemInfo){
		this.softFine = itemInfo.softFine
		this.hardFine = itemInfo.hardFine
		this.companyFine = itemInfo.companyFine
		this.serGuarantee = itemInfo.serGuarantee
	}
}

