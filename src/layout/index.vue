<template>
	<div id="wrap" class="wrap">
		<transition name="fade-transform">
			<router-view v-bind:key="key"></router-view>
		</transition>
		<TheFooter></TheFooter>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import { TheFooter } from './components'

export default defineComponent({
    name: 'DefaultLayout',
	components: {
		TheFooter
	},
    computed: {
		key() {
			return this.$route.path
		}
	},
	beforeCreate() {
		document.title = this.$route.meta.title;
	},
})
</script>