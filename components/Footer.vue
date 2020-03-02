<template>
  <div>
    <footer
      :class="['footer', $props.isPrimary ? '_bgcl-tpr' : '_bg-gradient2' , '_tal-ct', '_pdbt-48px']"
    >
      <div class="_dp-f _jtfct-ct alit-ct _fdrt-cl">
        <figure class="_dp-f _jtfct-ct _alct-ct">
          <img style="width:10rem;" src="~/assets/images/gv_logo.png" alt />
        </figure>
        <div class="_mgv-16px">
          <a target="_blank" :href="val.link" v-for="(val, i) in socials" :key="i" class="_mgh-8px">
            <font-awesome-icon
              :icon="[val.fab_fas, val.fa_name]"
              :class="[val.isHover ? '_cl-gray-400' : '_cl-white']"
              @mouseenter="val.isHover = true"
              @mouseleave="val.isHover = false"
            />
          </a>
        </div>
        <div class="_dp-f _jtfct-ct _alct-ct _fdrt-cl _fdrt-r-sm">
          <nuxt-link
            v-for="(val, i) in navBarItems"
            :key="i"
            :to="val.link"
            @mouseenter="val.isHover = true"
            @mouseleave="val.isHover = false"
            :class="[
              '_fw-500',
              '_mgh-24px',
              val.isHover ? '_cl-gray-400' : '_cl-white'
            ]"
          >{{ val.name }}</nuxt-link>
        </div>
        <p class="_mgv-16px _cl-white _fs-8">GrowthValley ltd.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    isPrimary: true
  },
  data() {
    return {
      navBarItems: [
        {
          name: "For employer",
          isHover: false,
          link: "/employer"
        },
        {
          name: "Academy",
          isHover: false,
          link: "/academy"
        },
        {
          name: "Media",
          isHover: false,
          link: "/media"
        }
      ],
      socials: [
        {
          fab_fas: "fab",
          fa_name: "facebook",
          link: "www.facebook.com/growthvalley",
          isHover: false
        },
        {
          fab_fas: "fab",
          fa_name: "twitter",
          link: "www.facebook.com/growthvalley",
          isHover: false
        },
        {
          fab_fas: "fas",
          fa_name: "envelope",
          link: "www.facebook.com/growthvalley",
          isHover: false
        }
      ]
    };
  }
};
</script>
