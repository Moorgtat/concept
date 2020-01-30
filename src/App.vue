<template>
  <div id="app">
    <transition name="route-anim" enter-active-class="enter-active" leave-active-class="leave-active">
    <RouterView/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>

    .enter-active {
        animation: fadeIn 1.2s;
    }

    .leave-active {
        animation: fadeOut 1.2s;
    }

    @keyframes fadeIn {
        from {
            opacity: 0.5;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0.5;
        }
    }

</style>
