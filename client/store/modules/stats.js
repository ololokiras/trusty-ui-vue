import * as types from '../mutations';
import * as actions from '../actions/stats';
//import * as getters from '../getters/stats';

let state = {
	asset:null,
	usdAsset:null,
	change:null,
}

let mutations={
	[types.SET_ASSET] (state, asset){
		state.asset = asset;
	},
	[types.SET_USD_ASSET](state, usd){
		state.usdAsset = usd;
	},
	[types.SET_ASSET_CHANGE] (state, change){
		state.change = change;
	}
}

export default {
  state,
  actions,
  //getters,
  mutations
}