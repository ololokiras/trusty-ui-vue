import * as types from '../mutations'
import * as apis from "../services/stats";

export const setAsset = ({commit}, asset) =>{
	commit(types.SET_ASSET, asset);
};

export const fetchAsset=({commit},asset) => {
	apis.fetchAsset(asset).then((result) =>{
		if(asset === 'usd'){
			commit(types.SET_ASSET_USD, result);
		}
		else{
			commit(types.SET_ASSET,result);
		}
	})
};

/*export const retrieveStats=({commit},asset)={
	apis.fetchStats(asset,[usd], 7, )
}*/