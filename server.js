const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const productoRouter = require('./routes/producto.js');
const categoriaRouter = require('./routes/categoria.js');

app.use('/producto', productoRouter);
app.use('/categoria', categoriaRouter);


// Configura la ruta para obtener la lista de productos
productoRouter.get('/', (req, res) => {
  // Lógica para obtener la lista de productos
  res.send('Obtener la lista de productos');
});

// Configura la ruta para obtener la lista de Categorias
categoriaRouter.get('/', (req, res) => {
  // Lógica para obtener la lista de Categorias
  res.send('Obtener la lista de Categorias');
});

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'prueba_ariadna',
  password: '1234',
  port: 5432,
});

// Prueba de conexión a la base de datos
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error al conectar a la base de datos:', err);
  }
  console.log('Conexión exitosa a la base de datos');
  release();
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
