const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  if (req.url === '/') {
    res.end('Servidor en Ubuntu funcionando 🚀');
  } else if (req.url === '/api') {
    res.end(JSON.stringify({ mensaje: "API funcionando 🚀" }));
  } else {
    res.end('Ruta no encontrada');
  }
});

server.listen(4000, () => {
  console.log('Servidor en puerto 4000');
});
