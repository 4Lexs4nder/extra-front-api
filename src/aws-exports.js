// https://docs.amplify.aws/lib/client-configuration/configuring-amplify-categories/q/platform/js/#general-configuration
const awsExports = {
    aws_cognito_region: 'eu-central-1', // (required) - Region where Amazon Cognito project was created
    aws_user_pools_id: 'eu-central-1_zjfFAbzdm', // (optional) -  Amazon Cognito User Pool ID
    aws_user_pools_web_client_id: '4et6tqpgnhim9m7e2g459fs9de', // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
    aws_cognito_identity_pool_id: 'eu-central-1:1ce20881-630a-444e-b6c1-4c4c558fa463', // (optional) - Amazon Cognito Identity Pool ID
    aws_mandatory_sign_in: 'enable', // (optional) - Users are not allowed to get the aws credentials unless they are signed in

    aws_appsync_region: "eu-central-1", // (optional) - AWS AppSync region
    aws_appsync_graphqlEndpoint: "https://kf62upeqxve5nmzkj6negwlguu.appsync-api.eu-central-1.amazonaws.com/graphql", // (optional) - AWS AppSync endpoint
    aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS", // (optional) - Primary AWS AppSync authentication type
};

export default awsExports;