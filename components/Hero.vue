<template>
  <section class="hero _cl-white _mgt-24px">
    <div class="hero-body">
      <div class="container _mgh-at _dp-f _fdrt-cl _alit-ct _dp-b-md">
        <div class="_tal-ct">
          <h1 class="title _fw-300 _cl-white _ffml-kanit">
            ทำความรู้จักกับบริษัทชั้นนำ
          </h1>
          <p class="subtitle _mgbt-32px _cl-white" style="margin-top: -16px;">
            ก่อนจะให้บริษัทรับเราเข้าทำงาน
            <br />
            ให้ตัวเราเป็นคนเลือกบริษัทก่อนไหม
          </p>
        </div>
        <div class="_pdh-128px-md _w-100pct _w-at-md">
          <div class="field has-icons-left has-addons">
            <div class="control has-icons-left _w-100pct">
              <input
                type="text"
                class="input is-medium _fs-6 _fw-500 _pdl-32px _pdl-64px-md"
                style="height: 3.5rem;"
                placeholder="Company name, Job, Location, Industry"
                @keydown.enter="$emit('search', keyword)"
                v-model="keyword"
              />
              <span
                class="icon is-small is-left _dp-n _dp-f-md"
                style="top: 1px;left: 10px;font-size: 22px;"
              >
                <font-awesome-icon :icon="['fas', 'search']" />
              </span>
              <a
                class="button is-primary _fw-500 _pdh-24px _dp-n _dp-f-md"
                style="position: absolute;top: 4px;right: 3px;z-index: 1000;height: 48px;"
                @click="$emit('search', keyword)"
                >Find it now</a>
                <a
                class="button is-primary _fw-500 _pdh-16px _dp-n-md"
                style="position: absolute;top: 4px;right: 3px;z-index: 1000;height: 48px;"
                @click="$emit('search', keyword)"
                ><font-awesome-icon :icon="['fas', 'search']" /></a>
            </div>
          </div>
          <!-- <div class="field _jtfct-spbtw _alit-ct _mgt-32px _pdh-16px _dp-n _dp-f-md ">
            <div class="control _w-40pct">
              <p class="_fs-7 _fw-500 _mgbt-8px">Sort by:</p>
              <div class="select _w-100pct">
                <select
                  name=""
                  id=""
                  class="_w-200px _fs-6 _fw-500 _cl-gray-400 _h-32px _pdv-0px"
                >
                  <option value="">Select</option>
                  <option value="">A-Z</option>
                  <option value="">Z-A</option>
                  <option value="">50000+</option>
                </select>
              </div>
            </div>
            <div class="cont _w-40pctrol">
              <p class="_fs-7 _fw-500 _mgbt-8px">Type:</p>
              <div class="select _w-100pct">
                <select
                  name=""
                  id=""
                  class="_w-200px _fs-6 _fw-500 _cl-gray-400 _h-32px _pdv-0px"
                >
                  <option value="">Full time</option>
                  <option value="">30000+</option>
                  <option value="">40000+</option>
                  <option value="">50000+</option>
                </select>
              </div>
            </div>
            <div class="contr _w-40pctol">
              <p class="_fs-7 _fw-500 _mgbt-8px">Level:</p>
              <div class="select _w-100pct">
                <select
                  name=""
                  id=""
                  class="_w-200px _fs-6 _fw-500 _cl-gray-400 _h-32px _pdv-0px"
                >
                  <option value="">Senior</option>
                  <option value="">30000+</option>
                  <option value="">40000+</option>
                  <option value="">50000+</option>
                </select>
              </div>
            </div>
            <a
              href=""
              @mouseenter="toggleMenu = true"
              @mouseleave="toggleMenu = false"
              :class="['_mgt-24px', toggleMenu ? '_cl-gray-700' : '_cl-white']"
              >clear all</a
            >
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    keyword: '',
    toggleMenu: false,
    sortBy :''
  }),
  watch: {
    keyword(newVal) {
      newVal === '' ? this.$emit('search', this.keyword) : false
    }
  }
};
</script>
<style lang="scss" scoped>
.select {
  &:not(.is-multiple) {
    &:not(.is-loading) {
      &:after {
        top: 16px;
        border: 2px solid transparent;
        border-radius: 2px;
        border-right: 0;
        border-top: 0;
        border-color: black !important;
      }
    }
  }
}
</style>
