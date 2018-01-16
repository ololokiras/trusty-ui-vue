import * as types from '../mutations';
import * as actions from '../actions/stats';
//import * as getters from '../getters/stats';

let state = {
	asset:null,
	usdAsset:null,
	progress:null,
}

let mutations={
	[types.SET_ASSET] (state, asset){
		state.asset = asset;
	},
	[types.SET_USD_ASSET](state, usd){
		state.usdAsset = usd;
	},
	[types.SET_ASSET_PROGRESS] (state, progress){
		state.progress = progress;
	}
}

export default {
  state,
  actions,
  //getters,
  mutations
}