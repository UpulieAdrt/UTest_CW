let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {


	callback(null, 'Successfully executed');
	console.log("success");


	s3.getObject({
		'Bucket': "test.s3.upulie",
		'Key': "new.jpg"
	}).promise()
		.then(data => {
			console.log(data);           // successful response
			/*
			data = {
				AcceptRanges: "bytes", 
				ContentLength: 3191, 
				ContentType: "image/jpeg", 
				ETag: "\\"6805f2cfc46c0f04559748bb039d69ae\\"", 
				LastModified: <Date Representation>, 
				Metadata: {...}, 
				TagCount: 2, 
				VersionId: "null"
			}
			*/

			console.log(data.Key);
			console.log("read the content");
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});


}