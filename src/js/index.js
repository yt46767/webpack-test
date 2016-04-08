/*
  //我们这里使用CommonJS的风格
  require('../css/main.css');
  var sub = require('./sub');

  var app  = document.createElement('div');
  app.innerHTML = '<h1>Hello World</h1>';
  document.body.appendChild(app);

  app.appendChild(sub());
*/

  //我们这里使用ES6的风格
  import '../css/main.css';
  import impsub from './sub'

  let app  = document.createElement('div');
  app.innerHTML = '<h1>Hello World</h1>';
  document.body.appendChild(app);

  app.appendChild(impsub());
