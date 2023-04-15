<template>
	<div id="wrap" class="wrap">
		<TheHeader v-on:frontTheme="userThemeChaning"></TheHeader>
		<transition name="fade-transform">
			<router-view v-bind:key="key"></router-view>
		</transition>
		<TheFooter></TheFooter>
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
		const router = useRouter();
		const route = useRoute();
		const name = 'DefaultLayout';
		const userThemeChaning = () => {
			console.log('user click theme chaning button');
		};
		const key = computed(() => {
			return route.path;
		});

		onBeforeMount(() => document.title = route.meta.title);

		return {
			name,
			userThemeChaning,
			key,
		}
	}

    /*name: 'DefaultLayout',
	methods: {
		userThemeChaning() {
			console.log('user click theme chaning button');
		}
	},
	components: {
		TheHeader,
		TheFooter
	},
    computed: {
		key() {
			return this.$route.path
		}
	},
	beforeCreate() {
		document.title = this.$route.meta.title;
	}, */
})
</script>