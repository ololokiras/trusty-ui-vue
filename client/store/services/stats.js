import {Apis} from "bitsharesjs-ws"

export function fetchStats ({base,quote,days,bucket_size}) {
    return new Promise((resolve,reject)=>{
        Apis.instance().history_api().exec("get_fill_order_history", [base.id, quote.id, 1]).then((result)=>{
            console.log("G_F_O_H",result[0].time);
        });
        let endDate = new Date();
        let startDate = new Date(endDate - 1000 * 60 * 60 * 24 * days);

        console.log("NOW",new Date())
        console.log("START",startDate)
        console.log("END",endDate)

        let endDateISO = endDate.toISOString().slice(0,-5);         
        let startDateISO =  startDate.toISOString().slice(0,-5);


        Apis.instance().history_api().exec("get_market_history", [
            base.id, quote.id, bucket_size, startDateISO, endDateISO
        ]).then(result => {
            if (result.length){
                let startDateISOSliced=startDateISO.slice(0,-9);
                let endDateISOSliced=endDateISO.slice(0,-9);
                let startDayStats=result.filter( x => x.key.open.includes(startDateISOSliced))
                let endDayStats=result.filter( x =>  x.key.open.includes(endDateISOSliced) )

                resolve(getAssetProgress(startDayStats,endDayStats));
                //resolve(result);
            }else{
                reject("No results");
            }
        }).catch(error => {
            reject(error);
        });
    });
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

export function fetchAsset (assets) {
    return new Promise((resolve,reject) => {
        Apis.instance().db_api().exec( "lookup_asset_symbols", [ assets ] )
        .then( result => {
            console.log(result);
            resolve(result);
        }).catch( error => {
            reject(error);
        });
    });
}