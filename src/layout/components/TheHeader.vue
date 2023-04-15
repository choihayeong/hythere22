<template>
    <header id="header" class="header">
        <div class="header__inner">
            <button type="button" class="header__button" @click="buttonClickEvent"></button>
            <div class="header__contents">
                <nav class="header__links">
                    <a href="https://github.com/choihayeong" target="_blank">github</a>
                    <a href="https://my.surfit.io/w/1146355103" target="_blank">resume(surfit)</a>
                    <a href="https://www.linkedin.com/in/hayeong-choi-85b7b2183/" target="_blank">linkedin</a>
                </nav>
                <ul class="header__info">
                    <li>
                        <span>FE Developer / UI Developer</span>
                    </li>
                    <li>
                        <span>Email:</span> 
                        hychoi318@gmail.com
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { onMounted } from 'vue'
export default ({
    setup() {

        const buttonClickEvent = (e: any) => {
            const target = e.target, headerContents = document.querySelector('.header__contents');
            // target.classList.toggle('active');
            // headerContents.classList.toggle('active');
        }

        const changeHeader = () => {
            let scTop = window.pageYOffset;
            const header = document.querySelector('#header');

            if (header !== null) {
                if (scTop > 200) {
                    header.classList.add('on');
                } else {
                    header.classList.remove('on');
                }
            }
        }

        onMounted(() => {
            window.addEventListener('scroll', changeHeader);
        })

        return {
            buttonClickEvent
        }
    }
})

</script>
