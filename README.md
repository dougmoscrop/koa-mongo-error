# mongo-http-errors

## usage

```javascript
var mongoHttpErrors = require('mongo-http-errors');

app.use(function(req, res) {
  // do something with mongo
});

app.use(log.errors());
app.use(mongoHttpErrors()); // translates some errors to http-errors
app.use(errorHandler());
```
