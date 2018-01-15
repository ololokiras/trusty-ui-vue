import * as types from '../mutations';
import * as actions from '../actions/stats';
//import * as getters from '../getters/stats';

let state = {
	asset:null,
	usdAsset:null,
}

let mutations={
	[types.SET_ASSET] (state, asset){
		state.asset= asset;
		console.log("set asset", state);
	},
	[types.SET_USD_ASSET](state, usd){
		state.usd= usd;
		console.log("set usd", state.usd);
	}
}

export default {
  state,
  actions,
  //getters,
  mutations
}