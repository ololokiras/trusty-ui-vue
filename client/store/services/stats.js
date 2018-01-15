import {Apis} from "bitsharesjs-ws"

export function getMarketStats(base, quote) {
    return (dispatch) => {
    	let marketStats = {};
        let market = quote.get("id") + "_" + base.get("id");
        let marketName = quote.get("symbol") + "_" + base.get("symbol");
        let now = new Date();
        let endDate = new Date();
        let startDateShort = new Date();
        endDate.setDate(endDate.getDate() + 1);
        startDateShort = new Date(startDateShort.getTime() - 3600 * 24 * 7 * 1000);

        let refresh = false;

        if (marketStats[market]) {
            if ((now - marketStats[market].lastFetched) < statTTL) {
                return false;
            } else {
                refresh = true;
            }
        }

        if (!marketStats[market] || refresh) {
            marketStats[market] = {
                lastFetched: new Date()
            };
            Promise.all([
                Apis.instance().history_api().exec("get_market_history", [
                    base.get("id"), quote.get("id"), 3600, startDateShort.toISOString().slice(0, -5), endDate.toISOString().slice(0, -5)
                ]),
                Apis.instance().history_api().exec("get_fill_order_history", [base.get("id"), quote.get("id"), 1])
            ])
            .then(result => {
                dispatch({history: result[0], last: result[1], market: marketName, base, quote});
            });
        }
    };
}