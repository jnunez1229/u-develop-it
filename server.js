const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());



app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

// Default response for any other requires (NOT FOUND) catch all
app.use((req, res) => {
    res.status(404).end();
})



app.listen(PORT, ()=> {
    console.log(`Sever running on port ${PORT}`);
});