const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (req.url === '/') {
    res.write('Servidor en Ubuntu funcionando 🚀');
  } else if (req.url === '/api') {
    res.write(JSON.stringify({ mensaje: "API funcionando 🚀" }));
  } else {
    res.write('Ruta no encontrada');
  }

  res.end();
});

server.listen(4000, () => {
  console.log('Servidor en puerto 4000');
});
