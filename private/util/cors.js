const AWS = require('aws-sdk');

const spacesEndpoint = new AWS.Endpoint('nyc3.digitaloceanspaces.com');
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: 'NHCRAFCNCHQR4VYNWH2M',
  secretAccessKey: 'VozzA8vTkHuDVuudOpzMqxgnIKjcNJJSR9guL1CUbTM'
});

// let params = {
//   Bucket: 'seedom-badges'
// };

// s3.getBucketCors(params, (err, data) => {
//   if (err) {
//     console.log(err, err.stack);
//   } else {
//     console.log(data);
//   }
// });

let params = {
  Bucket: 'seedom-badges',
  CORSConfiguration: {
    CORSRules: [
      {
        AllowedHeaders: [
          '*'
        ],
        AllowedMethods: [
          'GET',
          'PUT',
          'POST',
          'DELETE',
          'OPTIONS',
          'HEAD'
        ],
        AllowedOrigins: [
          '*'
        ],
        ExposeHeaders: [],
        MaxAgeSeconds: 0
      }
    ]
  }
};

s3.putBucketCors(params, (err, data) => {
  if (err) {
    console.log(err, err.stack);
  } else {
    console.log(data);
  }
});
