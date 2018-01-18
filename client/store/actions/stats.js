import * as types from '../mutations'
import * as apis from "../services/stats";


export const fetchChange = ({commit}, tempObj)=>{
	apis.fetchStats(tempObj).then((result)=>{
		let startDateISOSliced=result.startDate.slice(0,-9);
	    let endDateISOSliced=result.endDate.slice(0,-9);
	    let startDayStats=result.stats.filter( x => x.key.open.includes(startDateISOSliced));
	    let endDayStats=result.stats.filter( x =>  x.key.open.includes(endDateISOSliced));

	    let change=getAssetProgress(startDayStats,endDayStats);

		commit(types.SET_ASSET_CHANGE, change);
	})
}

function getAssetProgress(beforeArray, afterArray) {
    return getBucketAvg(afterArray)/getBucketAvg(beforeArray);
}

function getBucketAvg(bucket){
    let avg=0;
    for(let item of bucket ){
        avg+=getPrice(item);
    }
    avg/=bucket.length;
    return avg;
}

function getPrice(bucket){
    return bucket.base_volume / bucket.quote_volume;
}