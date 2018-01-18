<template>
	<div class="page">
		<input v-model="username" placeholder="Enter username">
		<router-link :to="{ name: 'user', params: { nickname: username }}">VIEW</router-link>
		<p></p>
		<router-link :to="{name: 'stats'}">check asset</router-link>

	</div>
</template>

<script>
export default {
	data(){
		return {
			username: "",
			//asset: "",
		}
	}, 
}
</script>
