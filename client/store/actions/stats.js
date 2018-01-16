import * as types from '../mutations'
import * as apis from "../services/stats";

export const setAsset = ({commit}, asset) =>{
	commit(types.SET_ASSET, asset);
};

export const fetchAsset=({commit},asset) => {
	apis.fetchAsset(asset).then((result) =>{
		if(asset[0] == "USD"){
			commit(types.SET_USD_ASSET, result);
		}
		else{
			commit(types.SET_ASSET,result);
		}
	})
};

export const fetchStats = ({commit}, tempObj)=>{
	console.log("tempObj", tempObj);
	apis.fetchStats(tempObj).then((result)=>{
		console.log("fetch stats",result)
	})
}

