const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from ECS Fargate! poc 24');
});

app.listen(8080, () => console.log('App running on port 8080'));
