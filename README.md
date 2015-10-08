# koa-mongo-error

## usage

```javascript
var mongoError = require('koa-mongo-error');

app.use(error()); // koa-error
app.use(mongoError())); // translates some errors to http-errors
app.use(function* () {
  // do something with mongo
});
```
