<script>
import Nav from "./components/Nav.vue"
import MobileNav from "./components/MobileNav.vue"
import Footer from "./components/Footer.vue"

export default {
  components: {
    Nav,
    MobileNav,
    Footer
  }
}
</script>

<template>
<button @click="showNav" class="mobile-nav">Mobile Nav</button>
<Nav />
<MobileNav />
<router-view />
</template>

<style>
.mobile-nav {
  display: none;
}

@media (max-width: 87em) {
  .mobile-nav {
    display: flex;
  }
}
</style>
