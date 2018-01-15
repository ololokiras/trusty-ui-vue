<template>
	<div>
		<router-link to="/">back</router-link>
		<h4>{{this.$route.params.asset}}</h4>
		
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
	export default{
		beforeMount(){
			this.$store.dispatch('fetchAsset',[this.$route.params.asset])
			this.$store.dispatch('fetchAsset',['USD']);
		//	this.$store.dispatch('setAsset',this.$route.params.asset);
		},
		/*computed:{
			retriveStats:function(){
				this.$store.dispatch('fetchAsset',)

			}
		}*/
	}
</script>