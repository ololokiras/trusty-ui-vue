import {Apis} from "bitsharesjs-ws"

export function fetchStats ({base,quote,days,bucket_size}) {
    return new Promise((resolve,reject)=>{
       
        let endDate = new Date();
        let startDate = new Date(endDate - 1000 * 60 * 60 * 24 * days);

        let endDateISO = endDate.toISOString().slice(0,-5);         
        let startDateISO =  startDate.toISOString().slice(0,-5);


        Apis.instance().history_api().exec("get_market_history", [
            base.id, quote.id, bucket_size, startDateISO, endDateISO
        ]).then(result => {
            if (result.length){
                
                resolve({stats:result,startDate:startDateISO,endDate:endDateISO});
            }else{
                reject("No results");
            }
        }).catch(error => {
            reject(error);
        });
    });
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