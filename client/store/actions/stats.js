import * as types from '../mutations'

export const setAsset = ({commit}, asset) =>{
	commit(types.SET_ASSET, asset);
};