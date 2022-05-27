<template>
	<div id="wrap" class="wrap">
		<transition name="fade-transform">
			<router-view v-bind:key="key"></router-view>
		</transition>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'DefaultLayout',
    data() {
        return {
            // key: 0
        }
    },
    computed: {
		key() {
			return this.$route.path
		}
	}
})
</script>