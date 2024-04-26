const express = require('express');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
