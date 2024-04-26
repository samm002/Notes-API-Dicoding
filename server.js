const express = require('express');
const routes = require('./src/routes');

const app = express();
const port = 5000;

app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
