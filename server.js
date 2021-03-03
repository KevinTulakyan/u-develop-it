const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
});

app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});