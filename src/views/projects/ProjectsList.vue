<template>
    <div class="container">
        <section class="section">
            <h2 class="section__title">Project List</h2>

            <div class="row">
                <ul class="gridlist">
                    <li v-for="(item, index) in workData" :key="index">
                        <figure>
                            <img src="https://dummyimage.com/480x480/f5f5f5/5a5aff&text=Project" alt="">
                        </figure>
                        <div class="gridlist__info">
                            <h3 class="gridlist__title">{{ item.title }}</h3>
                            <p>{{ item.summary }}</p>
                            <ul class="gridlist__category">
                                <li v-for="(cate, index) in setKeyWord(item.category)" :key="index">#{{ cate }}</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
    setup () {
		const store = useStore();
		const workData = computed(() => store.state.workData);

        const setKeyWord = (text : String) => {
            return text.split("|");
        }

		return {
			workData,
            setKeyWord
		}
    }
}
</script>