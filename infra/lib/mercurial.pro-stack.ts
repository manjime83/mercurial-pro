import * as cdk from "@aws-cdk/core";
import * as cognito from "@aws-cdk/aws-cognito";
import * as route53 from "@aws-cdk/aws-route53";
import * as apigateway from "@aws-cdk/aws-apigateway";

const params = {
  projectName: "mercurial",
  environment: "dev",
  domain: "mercurialpro.tk",
};

export class MercurialProStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new route53.PublicHostedZone(this, "PublicHostedZone", {
      zoneName: params.domain,
    });

    const userPool = new cognito.UserPool(this, "UserPool", {
      userPoolName: [params.projectName, params.environment, "users"].join("-"),
      signInAliases: { email: true },
      signInCaseSensitive: false,
      standardAttributes: { email: { required: true }, givenName: { required: true }, familyName: { required: true } },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
    });
    userPool.addClient("UserPoolWebClient", {
      userPoolClientName: [params.projectName, "web"].join("-"),
      authFlows: { custom: false },
      preventUserExistenceErrors: true,
      disableOAuth: true,
    });
    userPool.addDomain("UserPoolDomain", {
      cognitoDomain: { domainPrefix: [params.projectName, params.environment].join("-") },
    });
    new cognito.CfnUserPoolGroup(this, "UserPoolUsersGroup", {
      userPoolId: userPool.userPoolId,
      groupName: "Users",
    });

    new cdk.CfnOutput(this, "UserPoolOutput", { value: userPool.userPoolId });


new apigateway.

  }
}
