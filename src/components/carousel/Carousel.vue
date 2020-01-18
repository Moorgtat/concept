<template>
    <div class="carousel">
        <slot></slot>
        <a class="carousel-nav carousel-next" @click.prevent="next"></a>
        <a class="carousel-nav carousel-prev" @click.prevent="prev"></a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                index: 0,
                slides: [],
                direction: null
            }
        },
        mounted() {
            this.slides = this.$children;
            this.slides.forEach((slide, i) => {
                slide.index = i
            })
        },
        methods: {
            next() {
                this.index++;
                this.direction = 'right';
                if (this.index >= this.slidesCount) {
                    this.index = 0
                }
            },
            prev() {
                this.index--;
                this.direction = 'left';
                if (this.index < 0) {
                    this.index = this.slidesCount - 1
                }
            }
        },
        computed: {
            slidesCount() {
                return this.slides.length
            }
        }
    }
</script>

<style scoped>
    .carousel {
        position: relative;
    }

    .carousel-nav {
        position: absolute;
        top: 45%;
        left: 9px;
        background-image: url(arrow-left.png);
        background-repeat: no-repeat;
        background-size: contain;
        width: 40px;
        height: 40px;
    }

    .carousel-nav.carousel-next {
        right: 9px;
        left: auto;
        background-image: url(arrow-right.png);
    }
</style>