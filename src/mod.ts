import 'https://deno.land/x/dotenv/load.ts'
import { Application } from './deps.ts'
// Middlewares
import { logInfo } from './middlewares/logger.middleware.ts'
// Routers
import homeRouter from './routes/home.routes.ts'

const app = new Application()
app.use(logInfo)
app.use(homeRouter.routes())

const port = Number(Deno.env.get('PORT')) || 8000
await app.listen({ port })
