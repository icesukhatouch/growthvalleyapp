<template>
  <div>
    <NotFound v-if="!isData" />
    <div v-else>Found</div>
  </div>
</template>

<script>
import NotFound from "~/components/NotFound";
export default {
  data() {
    return {
      isData: null
    };
  },
  components: {
    NotFound
  }
};
</script>