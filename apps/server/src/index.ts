import cors from 'cors'
import express from 'express'
import { createExpressMiddleware } from '@trpc/server/adapters/express'
import { appRouter } from './router'


const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello mars!')
})


export const trpcExpress = createExpressMiddleware({
    router: appRouter,
})

app.use('/trpc', trpcExpress)

app.listen(8080, () => console.log(`Listening on port 8080`))