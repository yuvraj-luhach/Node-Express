var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // sends entire file at once , large data should not be sent as this makes website slower
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)

    // instead of sending our file back in one large instance we are sending it back in chunks
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
