const express = require('express');
const mongoose = require('mongoose');
const authRouters = require('./routes/authRoutes');

const app = express();
app.use(authRouters);
const mongoUri = 'mongodb+srv://mogoadmin:mYIpUnlw6tlVrhtt@cluster0.q80w7.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.error('error', (err) => {
    console.log('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
     res.send('Hi there !');
});

app.listen(3000, () => {
   console.log('Listening on port 3000');
});
