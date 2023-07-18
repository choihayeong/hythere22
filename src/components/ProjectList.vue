<template>
    <ul class="projects-list">
        <li v-for="(item, index) in workData" :key="index">
            <a :href="item.link" target="_blank">
                <span class="projects-list__title">
                    {{ item.title }}
                </span>
                <span class="projects-list__summary">
                    {{ item.summary }}
                </span>
            </a>
        </li>
    </ul>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
    setup () {
		const store = useStore();
		const workData = computed(() => store.state.workData);

		return {
			workData
		}
    }
}
</script>

<style lang="scss" scoped>

</style>