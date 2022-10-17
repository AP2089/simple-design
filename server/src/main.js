const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const publicPath = path.join(__dirname, '..', 'public');

const middlewares = jsonServer.defaults({
  static: publicPath
});

const {
  PORT,
  VUE_APP_SERVER_PORT,
  VUE_APP_SERVER_URL
} = process.env;

const port = VUE_APP_SERVER_PORT || PORT;

server.use(middlewares);
server.use('/api', router);

server.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

server.listen(port, () => {
  console.log(`App running at \x1b[36m${VUE_APP_SERVER_URL}\x1b[0m`);
});