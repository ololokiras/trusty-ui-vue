<template>
	<div>
		<router-link to="/">back</router-link>
		<h4>{{this.$route.params.asset}}</h4>
		<p></p>
		<input v-model="days" placeholder="input interval days">
		<button v-on:click="fetchStats">fetch stats</button>
		<p></p>
		<div v-if="this.$store.state.stats.progress">
			<p>progress: {{this.$store.state.stats.progress}}</p>
		</div>

	</div>
</template>

<script>
import { mapGetters } from 'vuex'
	export default{
		data(){
			return{
				days:"",
			}
		},
		beforeMount(){
			this.$store.dispatch('fetchAsset',[this.$route.params.asset])
			this.$store.dispatch('fetchAsset',["USD"]);
		},
		methods:{
			fetchStats(){				
				this.$store.dispatch('fetchStats',{
					base:this.$store.state.stats.asset[0],
					quote:this.$store.state.stats.usdAsset[0],
					days: this.days,
					bucket_size:3600
				});
			}
		},
		/*computed:{
			...mapGetters([
				'getProgress',
			])
		}*/
	}
</script>