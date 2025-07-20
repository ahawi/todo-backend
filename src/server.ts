import app from './app'

const PORT = process.env.PORT || 4200

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
