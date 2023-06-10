const express = require('express');
const app = express();
const User = require('./models/user');

app.get('/echo', (req, res) => {
    res.send('Recived Echo');
});

app.get('/run', async(req, res) => {
    await User.create({ firstName: 'Sabeel', lastName: 'Khan' });
    const users = await User.findAll();
    res.json(users);
})

app.listen(3000,()=>{
  console.log('server started at port 3000');
});