import { Router, Status } from '../deps.ts'

const router = new Router()

router.get('/', (ctx, next) => {
  ctx.response.body = {
    status: Status.OK,
    data: {
      hello: 'World!',
    },
  }
})

export default router
