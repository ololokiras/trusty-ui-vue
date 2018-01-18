export function getAssetById({assets}){
	if (assets){
		return (id) => {
			return (assets[id]) ? assets[id] : false;
		}
	}
}

export function getAssetBySymbol({assets}){
	console.log(assets);
	if(assets){
		return (symbol) => {
			console.log(symbol);
			return (assets[symbol]) ? assets[symbol] : false;
		}
	}
}

export function getAssetFieldById({assets}){
	if (assets){
		return (field,id) => {
			return (assets[id]) ? assets[id][field] : false;
		}
	}
}

export function getAllAssets(assets){
	if(assets){
		return assets.assets;
	}
}