<template>
  <div class="container _mgv-64px">
    <div class="columns _pdh-64px-lg is-multiline">
      <div class="column is-one-third" v-for="(val, i) in companies" :key="i">
        <div v-if="val.publish" class="card _mgh-16px _pdt-16px _pdh-8px _pdbt-8px">
          <div class="card-content">
            <div class="media _alit-ct">
              <div class="media-left">
                <figure class="image" style="width: 80px; height: 80px;">
                  <img
                    v-if="val.company_logo == null"
                    src="~assets/images/logoBlack.png"
                    alt="company logo"
                    class="_bdrd-64px"
                  />
                  <img
                    v-else
                    :src="'http://localhost:1337/' + val.company_logo.url"
                    alt="company logo"
                    class="_bdrd-64px"
                  />
                </figure>
              </div>
              <div class="media-content _mgl-4px">
                <p class="title is-size-6">
                  {{ val.company_name }}
                </p>
                <p class="subtitle is-size-7 _cl-gray-500">
                  {{ val.location }}
                </p>
              </div>
            </div>
            <div class="content">
              <p class="_tal-ct">
                {{ val.short_description }}
              </p>
              <div class="_w-100pct _dp-f _jtfct-ct">
                <nuxt-link
                  :to="{ name: 'companies-id', params: { id: val.id } }"
                  ><button class="button is-primary is-outlined _mgh-at _fs-7" style="padding: 0px 40px;">
                    See more
                  </button></nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import companiesQuery from "~/apollo/queries/company/companies";

export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      companies: [],
      query: ""
    };
  },
  apollo: {
    companies: {
      prefetch: true,
      query: companiesQuery
    }
  }
  // computed: {
  //   filteredList() {
  //     return this.companies.filter(company => {
  //       return company.name.toLowerCase().includes(this.query.toLowerCase());
  //     });
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 3px;
}
.content {
  p {
    min-height: 7rem;
  }
}
</style>
