<template>
  <div>
    <div>
      <Hero @search="magic => keyword = magic" />
      <Body :companies="companies" />
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Hero from "~/components/Hero.vue";
import Body from "~/components/Body.vue";
import companiesQuery from "~/apollo/queries/company/companies";

export default {
  data: () => ({
    api_url: process.env.strapiBaseUri,
    companies: [],
    keyword: null
  }),
  components: {
    Logo,
    Hero,
    Body
  },
  apollo: {
    companies: {
      prefetch: true,
      query: companiesQuery,
      variables() {
        return {
          company_name: this.keyword || ''
        }
      }
    }
  }
};
</script>
