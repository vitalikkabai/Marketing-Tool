// eslint-disable-next-line @typescript-eslint/no-var-requires
const AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
  // insert code to be executed by your lambda trigger
  console.log(event);

  const params = {
    GroupName: "Employees",
    UserPoolId: event.userPoolId,
    Username: event.userName
  };

  AWS.CognitoIdentityServiceProvider.adminAddUserToGroup(params)
    .promise()
    .then(res => callback(null, event))
    .catch(err => callback(err, event));

};
