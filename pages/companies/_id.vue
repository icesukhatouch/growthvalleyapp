<template>
  <div class="container">
    <div class="hero">
      <div class="hero-body">
        <div class="_dp-f _jtfct-ct _alit-ct">
          <figure class="image is-128x128 ">
            <img :src="'http://localhost:1337/' + company.company_logo.url"  alt="" />
          </figure>
        </div>
        <h1 class="title _tal-ct _mgt-16px">
          {{ company.title }}
        </h1>
        <p class="_tal-ct">
          <b>{{ company.company_name }}</b> {{ company.full_description }}
        </p>
        <div class="_dp-f _jtfct-ct _alit-ct">
          <a
            target="_blank"
            :href="val.link"
            v-for="(val, i) in company.social"
            :key="i"
          >
            <font-awesome-icon
              :icon="[val.fab_fas, val.fa_name]"
              :class="[val.isHover ? '_cl-gray-600' : '_cl-gray-400', 'social']"
              @mouseenter="val.isHover = true"
              @mouseleave="val.isHover = false"
            />
          </a>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="columns">
        <div class="column is-three-quarters">
          <div class="container" v-for="(val, i) in company.content" :key="i">
            <h1 class="title _cl-primary">
              {{ val.title }}
            </h1>
            <p>
              {{ val.body_paragraph  }}
            </p>
            <figure class="image _mgv-32px">
              <img :src="'http://localhost:1337/' + val.image.url"  alt="" />
              <figcaption class="_tal-ct _mgv-16px">
                {{ val.image_caption }}
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="column is-one-quarters">
          <div
            class="card _bgcl-tertiary _mgbt-64px"
            v-for="(val, i) in company.card"
            :key="i"
          >
            <header class="card-header _bgcl-primary">
              <p class="card-header-title  _cl-white _jtfct-ct">
                {{ val.title }}
              </p>
            </header>
            <div class="card-content">
              <ul class="_fw-600 _cl-gray-600">
                <li
                  v-for="(des, i) in val.list"
                  :key="i"
                  class="_dp-f _alit-st"
                >
                  -
                  <p class="_mgl-8px">{{ des.list }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import companyQuery from '~/apollo/queries/company/company'
export default {
  data() {
    return {
        company: {},

    };
  },
  // computed: {
  //   company() {
  //     return this.companies.find(company => company.id === this.id);
  //   }
  // },
  apollo: {
    company: {
      prefetch: true,
      query: companyQuery,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  },
  head() {
    return {
      title: this.company.company_name + " - GrowthValley"
    };
  }
};
</script>

<style lang="scss" scoped>
.social {
  margin: 2rem 1rem;
  font-size: 1.5rem;
}
</style>
