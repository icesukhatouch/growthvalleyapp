<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <div class="navbar-item">
          <nuxt-link to="/">
            <img src="~/assets/images/logoBlack.png" alt="GVlogo" />
          </nuxt-link>
        </div>
        <a
          :class="[
            'navbar-burger',
            'burger',
            '_dp-f',
            '_dp-n-md',
            '_jtfct-ct',
            '_alit-ct',
            { 'is-active': toggleClass }
          ]"
          role="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-items"
          @click="toggleMenu"
        >
          <font-awesome-icon :icon="['fas', 'bars']" />
        </a>
      </div>
      <div
        id="navbar-items"
        :class="['navbar-menu', { 'is-active': toggleClass }]"
      >
        <div class="navbar-end">
          <div
            class="navbar-item"
            v-for="(val, i) in navBarItems"
            :key="i"
            @mouseover="val.hover = true"
            @mouseleave="val.hover = false"
          >
            <nuxt-link
              :to="val.link"
              :class="['_fw-500', val.hover ? '_cl-gray-700' : '_cl-gray-500']"
              >{{ val.name }}</nuxt-link
            >
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <div class="button is-primary">
                <nuxt-link to="/login" class="_cl-white _fw-500"
                  >Sign Up</nuxt-link
                >
              </div>
              <div class="button">
                <nuxt-link to="/login" class="_cl-gray-500 _fw-500"
                  >Login</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nuxt />
    <footer class="footer _bgcl-tertiary _tal-ct _pdbt-48px">
      <div class="_dp-f _jtfct-ct alit-ct _fdrt-cl">
        <figure class="_dp-f _jtfct-ct _alct-ct">
          <img
            style="width:10rem;"
            src="~/assets/images/logoBlack.png"
            alt=""
          />
        </figure>
        <div class="_mgv-16px">
          <a href="https://www.facebook.com/growthvalley" class="_mgh-8px"
            ><font-awesome-icon :icon="['fab', 'facebook']" class="_cl-gray-600"
          /></a>
          <a href="https://www.facebook.com/growthvalley" class="_mgh-8px"
            ><font-awesome-icon :icon="['fab', 'linkedin']" class="_cl-gray-600"
          /></a>
          <a href="https://www.facebook.com/growthvalley" class="_mgh-8px"
            ><font-awesome-icon :icon="['fab', 'spotify']" class="_cl-gray-600"
          /></a>
        </div>
        <div class="_dp-f _jtfct-ct _alct-ct _fdrt-cl _fdrt-r-sm">
          <nuxt-link
            :class="['_fw-500', '_mgh-24px' , val.hover ? '_cl-gray-700' : '_cl-gray-500']"
            :to="val.link"
            v-for="(val, i) in navBarItems"
            :key="i"
            @mouseover="val.hover = true"
            @mouseleave="val.hover = false"
          >
            {{ val.name }}
          </nuxt-link>
        </div>
        <p class="_mgv-16px _cl-gray-600 _fs-8">GrowthValley ltd.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleClass: false,
      navBarItems: [
        {
          name: "Contact",
          hover: false,
          link: "/contact"
        },
        {
          name: "Job board",
          hover: false,
          link: "/job"
        }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.toggleClass = !this.toggleClass;
    }
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
