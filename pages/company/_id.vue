<template>
  <div class="container">
    <div class="hero">
      <div class="hero-body">
        <div class="_dp-f _jtfct-ct _alit-ct">
          <figure class="image is-128x128 ">
            <img :src="company.logo" alt="" />
          </figure>
        </div>
        <h1 class="title _tal-ct _mgt-16px">
          {{ company.title }}
        </h1>
        <p class="_tal-ct">
          <b>{{ company.company_name }}</b> {{ company.description }}
        </p>
        <div class="_dp-f _jtfct-ct _alit-ct">
          <a
            target="_blank"
            :href="val.link"
            v-for="(val, i) in company.socials"
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
              {{ val.description }}
            </p>
            <figure class="image _mgv-32px">
              <img src="~/assets/images/img_content.png" alt="" />
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
                  v-for="(list, i) in val.bullets"
                  :key="i"
                  class="_dp-f _alit-st"
                >
                  <font-awesome-icon
                    :icon="[list.icon.fab_fas, list.icon.fa_name]"
                    class="_mgt-4px"
                  />
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
export default {
  data() {
    return {
      id: this.$route.params.id,

      companies: [
        {
          id: "arrayx",
          company_name: "ArrayX",
          location: "Phyathai, Bangkok",
          logo: require(`@/assets/images/logo_arrayx.png`),
          title: "Company culture at ArrayX.",
          description:
            "is a UI/UX design agency based in Bangkok with offices in Thailand. At Morphosis, we look at projects holistically. As designers and architects, we aim not to simply be contractors who execute somebody else’s blueprints, but to help our clients build their tech cathedrals. This means understanding the product we are building down to its very roots and details.",
          socials: [
            {
              fab_fas: "fab",
              fa_name: "linkedin",
              isHover: false,
              link: "https://www.facebook.com/growthvalley"
            },
            {
              fab_fas: "fab",
              fa_name: "twitter",
              isHover: false,
              link: "https://www.facebook.com/growthvalley"
            },
            {
              fab_fas: "fas",
              fa_name: "envelope",
              isHover: false,
              link: "https://www.facebook.com/growthvalley"
            }
          ],
          content: [
            {
              title: "UX & UI design Services & Web Development",
              description:
                "Our user-centered design approach helps us grow our clients' businesses by answering fundamental questions about their users. We are agile, we are lean and we understand that moving fast is important to our clients if we want to have an impact on their business.",
              image: "",
              image_caption: "caption"
            },
            {
              title: "Quality-Driven Culture",
              description:
                "We stand for excellence, so quality is a key element that is guaranteed on every project we work on.",
              image: "",
              image_caption: "caption"
            },
            {
              title: "We value your opinion",
              description:
                "Collaboration is at the core of all we do. Your input on business, growth and expansion is welcomed and encouraged, not just projects.",
              image: "",
              image_caption: "caption"
            },
            {
              title: "Free Coffee, Snacks & Hugs",
              description:
                "We run on creativity… and we know you need fuel to bring your best self. Food and snacks are abundant and free.",
              image: "",
              image_caption: "caption"
            },
            {
              title: "Inspiring Environment",
              description:
                "We know people do their best work where they love to be, and that’s why we have a beautiful office right in the heart of Silom area.",
              image: "",
              image_caption: "caption"
            }
          ],
          card: [
            {
              title: "Location",
              bullets: [
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "Silom Bangrak, Bangkok, Thailand"
                }
              ]
            },
            {
              title: "Industry",
              bullets: [
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "Information Technology"
                }
              ]
            },
            {
              title: "Company properties",
              bullets: [
                {
                  icon: {
                    fab_fas: "",
                    fa_name: ""
                  },
                  text: "B2B"
                }
              ]
            },
            {
              title: "Benefits",
              bullets: [
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "7 Hours work day, 5 days a week"
                },
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "No overtime"
                },
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "Friendly and International Environment"
                },
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "International Clients"
                },
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "Free snacks and drinks"
                },
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "Health insurance"
                }
              ]
            }
          ]
        },
        {
          id: "morphosisapps",
          company_name: "Morphosis Apps",
          location: "Phyathai, Bangkok",
          logo: require(`@/assets/images/logo_morphosisapps.jpg`),
          title: "Company culture at Morphosis Apps.",
          description:
            "is a UI/UX design agency based in Bangkok with offices in Thailand. At Morphosis, we look at projects holistically. As designers and architects, we aim not to simply be contractors who execute somebody else’s blueprints, but to help our clients build their tech cathedrals. This means understanding the product we are building down to its very roots and details.",
          socials: [
            {
              fab_fas: "fab",
              fa_name: "linkedin",
              isHover: false,
              link: "https://www.facebook.com/growthvalley"
            },
            {
              fab_fas: "fab",
              fa_name: "twitter",
              isHover: false,
              link: "https://www.facebook.com/growthvalley"
            },
            {
              fab_fas: "fas",
              fa_name: "envelope",
              isHover: false,
              link: "https://www.facebook.com/growthvalley"
            }
          ],
          content: [
            {
              title: "UX & UI design Services & Web Development",
              description:
                "Our user-centered design approach helps us grow our clients' businesses by answering fundamental questions about their users. We are agile, we are lean and we understand that moving fast is important to our clients if we want to have an impact on their business.",
              image: "",
              image_caption: "caption"
            },
            {
              title: "Quality-Driven Culture",
              description:
                "We stand for excellence, so quality is a key element that is guaranteed on every project we work on.",
              image: "",
              image_caption: "caption"
            },
            {
              title: "We value your opinion",
              description:
                "Collaboration is at the core of all we do. Your input on business, growth and expansion is welcomed and encouraged, not just projects.",
              image: "",
              image_caption: "caption"
            },
            {
              title: "Free Coffee, Snacks & Hugs",
              description:
                "We run on creativity… and we know you need fuel to bring your best self. Food and snacks are abundant and free.",
              image: "",
              image_caption: "caption"
            },
            {
              title: "Inspiring Environment",
              description:
                "We know people do their best work where they love to be, and that’s why we have a beautiful office right in the heart of Silom area.",
              image: "",
              image_caption: "caption"
            }
          ],
          card: [
            {
              title: "Location",
              bullets: [
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "Silom Bangrak, Bangkok, Thailand"
                }
              ]
            },
            {
              title: "Industry",
              bullets: [
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "Information Technology"
                }
              ]
            },
            {
              title: "Company properties",
              bullets: [
                {
                  icon: {
                    fab_fas: "",
                    fa_name: ""
                  },
                  text: "B2B"
                }
              ]
            },
            {
              title: "Benefits",
              bullets: [
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "7 Hours work day, 5 days a week"
                },
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "No overtime"
                },
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "Friendly and International Environment"
                },
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "International Clients"
                },
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "Free snacks and drinks"
                },
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "Health insurance"
                }
              ]
            }
          ]
        },
        {
          id: "nimble",
          company_name: "Nimble",
          location: "Phyathai, Bangkok",
          logo: require(`@/assets/images/logo_nimble.png`),
          title: "Company culture at Nimble.",
          description:
            "We are a team of software engineers, designers and product managers building outstanding web and mobile applications for companies of all sizes, from 1-person startups to Fortune 500 companies.  If you want to grow together, work on challenging products used by millions of users and enjoy using the best tools and practices, Nimble is the right place for you! We keep our recruitment process practical and straightforward. To learn more about how we work, check our handbook named Compass, Github organisation and Medium account. Want to see what we have built? Check our Dribbble and Behance accounts.",
          socials: [
            {
              fab_fas: "fab",
              fa_name: "linkedin",
              isHover: false,
              link: "https://www.facebook.com/growthvalley"
            },
            {
              fab_fas: "fab",
              fa_name: "twitter",
              isHover: false,
              link: "https://www.facebook.com/growthvalley"
            },
            {
              fab_fas: "fas",
              fa_name: "envelope",
              isHover: false,
              link: "https://www.facebook.com/growthvalley"
            }
          ],
          content: [
            {
              title: "UX & UI design Services & Web Development",
              description:
                "Our user-centered design approach helps us grow our clients' businesses by answering fundamental questions about their users. We are agile, we are lean and we understand that moving fast is important to our clients if we want to have an impact on their business.",
              image: "",
              image_caption: "caption"
            },
            {
              title: "Quality-Driven Culture",
              description:
                "We stand for excellence, so quality is a key element that is guaranteed on every project we work on.",
              image: "",
              image_caption: "caption"
            },
            {
              title: "We value your opinion",
              description:
                "Collaboration is at the core of all we do. Your input on business, growth and expansion is welcomed and encouraged, not just projects.",
              image: "",
              image_caption: "caption"
            },
            {
              title: "Free Coffee, Snacks & Hugs",
              description:
                "We run on creativity… and we know you need fuel to bring your best self. Food and snacks are abundant and free.",
              image: "",
              image_caption: "caption"
            },
            {
              title: "Inspiring Environment",
              description:
                "We know people do their best work where they love to be, and that’s why we have a beautiful office right in the heart of Silom area.",
              image: "",
              image_caption: "caption"
            }
          ],
          card: [
            {
              title: "Location",
              bullets: [
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "Silom Bangrak, Bangkok, Thailand"
                }
              ]
            },
            {
              title: "Industry",
              bullets: [
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "Information Technology"
                }
              ]
            },
            {
              title: "Company properties",
              bullets: [
                {
                  icon: {
                    fab_fas: "",
                    fa_name: ""
                  },
                  text: "B2B"
                }
              ]
            },
            {
              title: "Benefits",
              bullets: [
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "7 Hours work day, 5 days a week"
                },
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "No overtime"
                },
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "Friendly and International Environment"
                },
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "International Clients"
                },
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "Free snacks and drinks"
                },
                {
                  icon: {
                    fab_fas: "fas",
                    fa_name: "map-marker-alt"
                  },
                  text: "Health insurance"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {
    company() {
      return this.companies.find(company => company.id === this.id);
    }
  },
  head() {
    return {
      title: this.company.company_name + " - GrowthValey"
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
