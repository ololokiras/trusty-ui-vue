<template>
	<div>
		<router-link to="/">back</router-link>
		<h4>{{this.$route.params.asset}}</h4>
		<h4>market link: {{checkMarketIsExist}}</h4>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
	export default{
		beforeMount(){
			this.$store.dispatch('setAsset',this.$route.params.asset);
		},
		computed:{
			checkMarketIsExist:function(){
				let asset=this.$route.params.asset;
			 	let url=`https://wallet.bitshares.org/#/market/GDEX.${asset}_USD`;
			 	let xhr=new XMLHttpRequest();
			 	xhr.open('HEAD', url,false);
			 	xhr.send();
			 	if(xhr.status=="200"){
			 		return true;
			 	}
			 	else{
			 		return false;
			 	}
			}
		}
	}
</script>