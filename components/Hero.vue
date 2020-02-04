<template>
  <section class="hero _bgcl-tertiary">
    <div class="hero-body">
      <div class="container _mgh-at _dp-f _fdrt-cl _alit-ct _dp-b-md">
        <div class="_tal-ct">
          <h1 class="title _ffml-roboto _fw-300">
            Accelerate digital workforce
          </h1>
          <p class="subtitle _mgt-0px _mgbt-32px">
            ก่อนจะให้บริษัทรับเราเข้าทำงาน
            <br /> ให้ตัวเราเป็นคนเลือกบริษัทก่อนไหม
          </p>
        </div>
        <Logo class="_dp-n-md" />
        <div class="_dp-n _dp-b-md _pdh-128px">
          <div class="field has-icons-left has-addons">
            <div class="control has-icons-left _w-100pct">
              <input
                type="text"
                class="input is-medium"
                placeholder="Company name, Job, Location, Industry"
              />
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'search']" />
              </span>
            </div>
            <div class="control">
              <a class="button is-primary is-medium"> Find it now</a>
            </div>
          </div>
          <div class="field _dp-f _jtfct-spbtw _alit-ct">
            <div class="control _w-40pct">
              <p>Sort by:</p>
              <div class="select _w-100pct">
                <select name="" id="" class="_w-200px">
                  <option value="">Salary</option>
                  <option value="">30000+</option>
                  <option value="">40000+</option>
                  <option value="">50000+</option>
                </select>
              </div>
            </div>
            <div class="cont _w-40pctrol">
              <p>Type:</p>
              <div class="select _w-100pct">
                <select name="" id="" class="_w-200px">
                  <option value="">Full time</option>
                  <option value="">30000+</option>
                  <option value="">40000+</option>
                  <option value="">50000+</option>
                </select>
              </div>
            </div>
            <div class="contr _w-40pctol">
              <p>Level:</p>
              <div class="select _w-100pct">
                <select name="" id="" class="_w-200px">
                  <option value="">Senior</option>
                  <option value="">30000+</option>
                  <option value="">40000+</option>
                  <option value="">50000+</option>
                </select>
              </div>
            </div>
            <a
              href=""
              @mouseenter="toggleMenu"
              @mouseleave="toggleMenu"
              :class="[
                '_mgt-24px',
                toggleClass ? '_cl-gray-700' : '_cl-gray-500'
              ]"
              >clear all</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from './Logo'
export default {
  components: {
    Logo
  },
  data() {
    return {
      toggleClass: false
    };
  },
  methods: {
    toggleMenu() {
      this.toggleClass = !this.toggleClass;
    }
  }
};
</script>
