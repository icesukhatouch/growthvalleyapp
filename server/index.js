// const Koa = require('koa')
// const consola = require('consola')
// const { Nuxt, Builder } = require('nuxt')

// const app = new Koa()

// //Import and set Nuxt.js function
// const config = require('../nuxt.config')
// config.dev = app.env !== 'production'

// async function start() {
//     const nuxt = new nuxt(config)

//     const {
//         host = process.env.HOST || '127.0.0.1',
//         port = process.env.PORT || 3000
//     } = nuxt.options.server

// }


const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});


app.listen(3000);