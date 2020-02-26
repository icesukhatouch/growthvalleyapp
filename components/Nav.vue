<template>
  <div>
    <nav class="navbar _bgcl-tpr _pdv-24px _pdh-64px">
      <div class="navbar-brand  _bgcl-tpr">
        <div class="navbar-item  _bgcl-tpr">
          <nuxt-link to="/">
            <img src="~/assets/images/gv_logo.png" alt="GVlogo" />
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
            class="navbar-item _mgh-16px"
            v-for="(val, i) in navBarItems"
            :key="i"
            @mouseover="val.hover = true"
            @mouseleave="val.hover = false"
          >
            <nuxt-link
              :to="val.link"
              :class="[ val.hover ? '_cl-gray-400' : '_cl-white']"
              >{{ val.name }}</nuxt-link
            >
          </div>
          <div class="navbar-item _mgl-16px">
            <div class="buttons">
              <div class="button _bgcl-tpr _bdrd-0px">
                <nuxt-link to="/signin" class="_cl-white"
                  >Sign-in</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleClass: false,
      navBarItems: [
        {
          name: "For employer",
          hover: false,
          link: "/employer"
        },
        {
          name: "Academy",
          hover: false,
          link: "/academy"
        },
        {
          name: "Media",
          hover: false,
          link: "/media"
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
