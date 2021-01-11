const express = require('express')

const app = express()

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))


app.get('/', (req,res) => {
  res.json({msg:'Welcome to Contact Keeper API'})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on porn: ${PORT}`))