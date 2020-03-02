<template>
  <div class="_bgcl-white">
    <Nav :isPrimary="false" />
    <nuxt />
    <Footer :isPrimary="false" />
  </div>
</template>

<script>
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";
export default {
  data() {
    return {
      isPrimary: false
    };
  },
  components: {
    Nav,
    Footer
  }
};
</script>


<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
