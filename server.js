const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Bassam', lastName: 'Mednini'},
        {id: 2, firstName: 'Ali', lastName: 'Dogan'},
        {id: 3, firstName: 'Ahmed', lastName: 'Yavuz'}
    ];

    res.json(customers)
});

const port = 5000;

app.listen(port, () => console.log(`Server startet unter ${port}`));