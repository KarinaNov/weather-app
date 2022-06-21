<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  watch: {
    $route(to, from) {
      const routeDeep = ["/", "/week"];
      const toDepth = routeDeep.indexOf(to.path);
      const fromDepth = routeDeep.indexOf(from.path);
      this.fade = toDepth > fromDepth ? "slide-left" : "slide-right";
    },
  },
};
</script>

<style lang="scss">
.app {
  background-color: black;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(0px);
  opacity: 0;
}
</style>
