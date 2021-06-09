'use strict';
module.exports.imageUpload = async (event) => {
  console.log("event run first time successfully")
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'image function executed successfully!',
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


module.exports.hello = async (event) => {
  console.log("event run first time successfully")
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'r function executed successfully!',
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

