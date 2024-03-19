const express = require('express');
const routes = require('./routes');
const { errorHandler } = require('./middleware/middleware');

const app = express();
const port = 3000;

app.use(express.json());

// Untuk menampilkan halaman landing page dan cari mobil
app.use('/public', express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Ping successfully',
  });
});

app.use('/', routes);

// Middlewares
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
