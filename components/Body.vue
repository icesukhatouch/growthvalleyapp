<template>
  <div class="container _mgv-64px">
    <div class="columns _pdh-64px-lg is-multiline">
      <div class="column is-one-third" v-for="(val, i) in companies" :key="i">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="val.logo" alt="" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-size-5">
                  {{ val.name }}
                </p>
                <p class="subtitle is-size-6">
                  {{ val.location }}
                </p>
              </div>
            </div>
            <div class="content">
              <p class="_tal-ct">
                {{ val.description }}
              </p>
              <div class="_w-100pct _dp-f _jtfct-ct">
                <nuxt-link :to="val.path"
                  ><button class="button is-primary is-outlined _mgh-at">
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
export default {
  data() {
    return {
      companies: [
        {
          path: "./company/arrayx",
          name: "ArrayX",
          location: "Phyathai, Bangkok",
          logo: require(`@/assets/images/logo_arrayx.png`),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris."
        },
        {
          path: "./company/morphosisapps",
          name: "Morphosis Apps",
          location: "Phyathai, Bangkok",
          logo: require(`@/assets/images/logo_morphosisapps.jpg`),

          description:
            "Morphosis Apps is a UI/UX design agency based in Bangkok with offices in Thailand."
        },
        {
          path: "./company/nimble",
          name: "Nimble",
          location: "Phyathai, Bangkok",
          logo: require(`@/assets/images/logo_nimble.png`),

          description:
            "We are a team of software engineers, designers and product managers building outstanding web and mobile applications for companies of all sizes, from 1-person startups to Fortune 500 companies."
        },
        {
          path: "./company/arrayx",
          name: "ArrayX",
          location: "Phyathai, Bangkok",
          logo: require(`@/assets/images/logo_arrayx.png`),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris."
        },
        {
          path: "./company/morphosisapps",
          name: "Morphosis Apps",
          location: "Phyathai, Bangkok",
          logo: require(`@/assets/images/logo_morphosisapps.jpg`),

          description:
            "Morphosis Apps is a UI/UX design agency based in Bangkok with offices in Thailand."
        },
        {
          path: "./company/nimble",
          name: "Nimble",
          location: "Phyathai, Bangkok",
          logo: require(`@/assets/images/logo_nimble.png`),

          description:
            "We are a team of software engineers, designers and product managers building outstanding web and mobile applications for companies of all sizes, from 1-person startups to Fortune 500 companies."
        }
      ]
    };
  }
};
</script>
