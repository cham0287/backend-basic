const express = require('express');
const path = require('path');
const app = express();

app.set('port', 3001);

app.use((req, res, next) => {
  console.log('모든 요청에 실행하고 싶어요');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
  res.send('hello express');
});

app.get('/about', (req, res) => {
  res.send('hello express');
});

app.get('/category/javascript', (req, res) => {
  res.send('hello js');
});

app.get('/category/:name', (req, res) => {
  res.send(`hello ${req.params.name}`);
});

app.use((req, res, next) => {
  res.send('404');
});

// Error middleware: 반드시 매개변수 4개를 넣어야 된다.
app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(app.get('port'), () => {
  console.log('execute express server');
});
