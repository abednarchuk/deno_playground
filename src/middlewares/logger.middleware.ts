import { Middleware, log, fmt } from '../deps.ts'

export const logInfo: Middleware = async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.response.headers.set('X-Response-Time', `${ms}ms`)
  let statusColor = fmt.dim
  const resStatus = ctx.response.status
  if (resStatus >= 1 && resStatus < 100) {
    statusColor = fmt.green
  } else if (resStatus >= 200 && resStatus < 300) {
    statusColor = fmt.green
  } else if (resStatus >= 300 && resStatus < 400) {
    statusColor = fmt.yellow
  } else if (resStatus >= 400 && resStatus < 600) {
    statusColor = fmt.red
  }
  log.info(
    `${fmt.brightWhite(ctx.request.url.toString())} ${statusColor(
      ctx.request.method
    )} ${statusColor(ctx.response.status.toString())} - ${ms.toString()} ms`
  )
}
