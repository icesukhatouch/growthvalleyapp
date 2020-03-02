<template>
  <div class="container _mgv-64px">
    <div class="columns _pdh-64px-lg is-multiline">
      <div
        class="column is-half-tablet is-one-third-desktop"
        v-for="(val, i) in companies"
        :key="i"
      >
        <div v-if="val.publish" class="card _mgh-16px _mgv-32px _pdt-16px _pdh-8px _pdbt-8px">
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
              <div class="media-content _mgl-4px" style="overflow-y:hidden;">
                <p class="title is-size-6 _ltspc-05px">{{ val.company_name }}</p>
                <p class="subtitle is-size-7 _cl-gray-500 _ltspc-025px">{{ val.location }}</p>
              </div>
            </div>
            <div class="content">
              <div class="_dp-f _jtfct-ct _alit-ct short_description">
                <p class="_tal-ct">{{ val.short_description }}</p>
              </div>

              <div class="_w-100pct _dp-f _jtfct-ct">
                <nuxt-link :to="{ name: 'companies-id', params: { id: val.id }}" :prefetch="true">
                  <button
                    class="button is-primary is-outlined _mgh-at _fs-7"
                    style="padding: 0px 40px;"
                  >See more</button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    companies: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 3px;
}
.content {
  .short_description {
    min-height: 7rem;
    margin-bottom: 1.5rem;
  }
}
</style>
