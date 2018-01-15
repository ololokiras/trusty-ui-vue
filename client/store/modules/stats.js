import * as types from '../mutations';
import * as actions from '../actions/stats';
//import * as getters from '../getters/stats';

let state = {
	asset:null,
}

let mutations={
	[types.SET_ASSET] (state, asset){
		state.asset= asset;
		console.log("set asset", state);
	}
}

export default {
  state,
  actions,
  //getters,
  mutations
}