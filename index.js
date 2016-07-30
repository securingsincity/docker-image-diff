var imageDiff = require('image-diff');
imageDiff({
  actualImage:  __dirname + '/images/actual.jpg',
  expectedImage: __dirname + '/images/expected.jpg',
  diffImage: __dirname + '/images/difference.png',
}, function (err, imagesAreSame) {
console.log(err);
 console.log("imagesAreSame", imagesAreSame);
});