<template>
  <div class="container" v-if="company">
    <div class="hero _pdh-24px">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-one-quarter">
            <div class="_dp-f _jtfct-ct _alit-ct">
              <figure class="image is-180x180">
                <img
                  :src="'http://localhost:1337/' + company.company_logo.url"
                  alt="logo"
                  class="is-rounded"
                />
              </figure>
            </div>
            <p class="_tal-ct _mgt-16px">{{ company.location }}</p>
            <div class="_dp-f _jtfct-ct _alit-ct">
              <a target="_blank" v-for="(val, i) in company.social" :key="i" :href="val.link">
                <font-awesome-icon
                  :icon="[val.icon.fab_fas, val.icon.fa_name]"
                  :class="[val.isHover ? '_cl-gray-500' : '_cl-gray-700', 'social']"
                  @mouseenter="val.isHover = true"
                  @mouseleave="val.isHover = false"
                />
              </a>
            </div>
          </div>
          <div class="column is-offset-1 _dp-f _jtfct-ct _alit-ct _pdh-32px _fdrt-cl">
            <div>
              <h1 class="title _fs-3 _mgbt-48px">{{ company.company_name.toUpperCase() }}</h1>
              <p class="_lh-200pct">
                <b>{{ company.company_name }}</b>
                {{ company.full_description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="columns">
        <div class="column is-three-quarters">
          <div class="container" v-for="(val, i) in company.content" :key="i">
            <h1 class="title _mgbt-48px _cl-primary">{{ val.title }}</h1>
            <p class="_lh-200pct">{{ val.body_paragraph }}</p>
            <figure class="image _mgv-32px">
              <img :src="'http://localhost:1337/' + val.image.url" alt="image" />
              <figcaption class="_tal-ct _mgv-32px _fs-7"><i>{{ val.image_caption }}</i></figcaption>
            </figure>
          </div>
        </div>
        <div class="column is-one-quarters">
          <div class="card _bgcl-tertiary _mgbt-64px" v-for="(val, i) in company.card" :key="i">
            <header class="card-header _bg-gradient2">
              <p class="card-header-title _cl-white _jtfct-ct">{{ val.title }}</p>
            </header>
            <div class="card-content">
              <ul class="_fw-600 _cl-gray-600">
                <li v-for="(list, i) in val.bullet" :key="i" class="_dp-f _alit-st">
                  -
                  <p class="_mgl-8px">{{ list.text }}</p>
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
import companyQuery from "~/apollo/queries/company/company";
export default {
  layout: "company_layout",
  data() {
    return {
      company: {}
    };
  },
  apollo: {
    company: {
      prefetch: true,
      query: companyQuery,
      variables() {
        return { id: this.$route.params.id};
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
  margin: 1rem 1rem;
  font-size: 1.5rem;
}
.is-180x180 {
  width: 180px;
  height: 180px;
}
</style>
