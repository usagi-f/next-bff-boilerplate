const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const routes = require('./routes')
const request = require('./api/inServer')

const app = next({
  dev: process.env.NODE_ENV !== 'production',
})
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router
    .get('/api/posts', bodyParser(), async ctx => {
      const { body } = await request.placeholderUserPosts(ctx.request.query)
      ctx.type = 'application/json'
      ctx.body = body
    })
    .get('*', async ctx => {
      const { req, res } = ctx
      await handler(req, res)
      ctx.response = false
    })

  server.use(async (ctx, nextApp) => {
    ctx.res.statusCode = 200
    await nextApp()
  })

  server.use(router.routes())

  server.listen('3000', err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
