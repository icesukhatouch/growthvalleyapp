
export default {
  env: {  
    strapiBaseUri: process.env.API_URL || "http://localhost:1337"
  },
  mode: 'universal',
  server: {
    PORT : 5555
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Growth Valley - Accelerate digital workforce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Accelerate digital workforce' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700|Roboto:300,400,500,700&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#22B573' },
  /*
  ** Global CSS
  */
  css: [
    { src: "~assets/style/main.scss", lang: "scss"}
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

// page transition
  transition: {
      name:'page',
      mode: 'out-in'
    },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
],
'@nuxtjs/apollo',
'@nuxtjs/markdownit'
  ],
  apollo: {  
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || 'http://localhost:1337/graphql'
      }
    }
  },
  markdownit: {  
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
