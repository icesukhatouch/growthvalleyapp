<template>
  <div>
    <div>
      <Hero />
      <Body />
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Hero from "~/components/Hero.vue";
import Body from "~/components/Body.vue";

export default {
  components: {
    Logo,
    Hero,
    Body
  }
};
</script>
