#!/usr/bin/env node
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

app.listen(3000, () => console.log('Server ready'))

// salida sin esperar que termine el programa o procesos en marcha en el servidor
setTimeout(() => {
  // process.exit(1); // salida con error
  // process.exit(0); // salida sin error
}, 1000)

// salida con espera que termine el programa o procesos en marcha en el servidor
process.on('SIGTERM', () => {
  app.close(() => {
    console.log('Process terminated')
  })
})

setTimeout(() => {
  process.kill(process.pid, 'SIGTERM')
}, 1000)
