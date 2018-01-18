<template>
	<div>
		<router-link to="/">back</router-link>
		<h4>{{this.$route.params.asset}}</h4>
		<p></p>

		<div v-if="this.$store.state.assets.assets">
			<select v-model="base"> 
				<option v-for="asset in getAllAssets" v-bind:value="asset">
					{{asset.symbol}}
				</option>
			</select>
			<span> Base is: {{base.symbol}}</span>

			<select v-model="quote">
				<option v-for="asset in getAllAssets" v-bind:value="asset">
					{{asset.symbol}}
				</option>
			</select>
			<span>Quote is: {{quote.symbol}}</span>
		</div>
		
		<p></p>
		<button v-on:click="fetchStats">fetch stats</button>
		<p></p>
		<div v-if="this.$store.state.stats.change">
			<p>change: {{this.$store.state.stats.change}}</p>
		</div>

	</div>
</template>

<script>
import { mapGetters } from 'vuex'
	export default{
		data(){
			return{
				days: "",
				base: "",
				quote: "",
			}
		},
		beforeMount(){
			this.$store.dispatch('getDefaultAssets')
		},
		methods:{
			fetchStats(){				
				this.$store.dispatch('fetchStats',{
					base: this.base,
					quote: this.quote,
					days: 7,
					bucket_size:3600
				});
			}
		},
		computed:{
			...mapGetters([
				'getAllAssets',
				'getAssetBySymbol'
			])
		}
	}
</script>