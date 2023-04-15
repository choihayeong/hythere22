<template>
    <ul class="projects-list">
        <li v-for="(item, index) in workData" :key="index">
            <h3 class="projects-list__title">
                {{ item.title }}
            </h3>
            <p>
                {{ item.summary }}
            </p>
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