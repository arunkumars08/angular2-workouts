var express = require('express');
var app = express();
app.use(express.static('.'));
app.use(express.static('/myapp'));
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=example1.server.js.map