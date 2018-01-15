import {Apis} from "bitsharesjs-ws"

export function fetchStats (base,quote,days,bucket_size) {
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
                resolve(result);
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