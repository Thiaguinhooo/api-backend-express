import express from 'express'
import profileRouter from './router/profileRouter.js'
import productRouter from './router/productRouter.js'
import carRouter from './router/carRouter.js'

const app = express()
const port = 3333

app.use(express.json()) // convete o Json que chegou na requisição em um objeto sj e vai salvalo

app.use('/profile', profileRouter)
app.use('/product', productRouter)
app.use('/car', carRouter)

app.listen(port, () => {
  console.log(`API Rodando em http://localhost:${port}`)
})
