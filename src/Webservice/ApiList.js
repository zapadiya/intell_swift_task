import HTTP from "./http";

class APIList {
	constructor() { }

	getConfiguration(){
		return HTTP.GET("configuration");
	}

	login(params) {
		return HTTP.POST("login", params);
	}

	getPets(params) {
		return HTTP.POST("getPets", params);
	}

}

export default new APIList();