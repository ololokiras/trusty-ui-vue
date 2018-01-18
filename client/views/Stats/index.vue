<template>
	<div>
		<router-link to="/">back</router-link>
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
		<button v-on:click="fetchChange">fetch change</button>
		<p></p>
		<div v-if="this.$store.state.stats.change">
			<p>change: {{getChange}}</p>
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
			fetchChange(){				
				this.$store.dispatch('fetchChange',{
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
				'getChange',
			])
		}
	}
</script>