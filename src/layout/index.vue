<template>
	<div id="wrap" class="wrap">
		<the-header></the-header>
		<transition name="fade-transform">
			<router-view v-bind:key="key"></router-view>
		</transition>
		<the-footer></the-footer>
	</div>
</template>

<script>
import { onBeforeMount, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { TheHeader, TheFooter } from './components';

export default ({
	components: {
		TheHeader,
		TheFooter
	},
	setup() {
		const router = useRouter(), route = useRoute();
		const name = 'DefaultLayout';
		const key = computed(() => {
			return route.path;
		})

		onBeforeMount(() => document.title = route.meta.title);

		return {
			name,
			key,
		}
	}
})
</script>