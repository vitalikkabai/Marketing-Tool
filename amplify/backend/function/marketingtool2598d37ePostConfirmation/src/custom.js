// eslint-disable-next-line @typescript-eslint/no-var-requires
const AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
  // insert code to be executed by your lambda trigger
  console.log(event);
  let GroupName;
  switch(event.request.userAttributes['custom:occupation']) {
    case "0":
      GroupName = "Employees";
    break;
    case '1':
      GroupName = "Managers";
    break;
    case '2':
      GroupName = "Freelancers";
    break;
    case '3':
      GroupName = "Admins";
    break;
  }
  const params = {
    GroupName,
    UserPoolId: event.userPoolId,
    Username: event.userName
  };
  const cogintoIdentityService = new  AWS.CognitoIdentityServiceProvider();
  console.log(cogintoIdentityService);
  cogintoIdentityService.adminAddUserToGroup(params)
    .promise()
    .then(res => callback(null, event))
    .catch(err => callback(err, event));

};
