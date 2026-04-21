const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Servidor en Ubuntu funcionando 🚀');
  } else if (req.url === '/api') {
    res.write(JSON.stringify({ status: "OK", mensaje: "API funcionando" }));
  } else {
    res.write('Ruta no encontrada');
  }
  res.end();
});

server.listen(4000, () => {
  console.log('Servidor en puerto 4000');
});
