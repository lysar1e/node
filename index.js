const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json({extended: true}));
app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/todo', require('./routes/todo.route'));

async function start() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.5mrml.mongodb.net/todo?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        });

        app.listen(PORT, () => {
            console.log(`Server has started on port: ${PORT}`);
        });
    } catch(error) {
        console.log(error)
    }
}
start();