import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2, Context } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event: APIGatewayProxyEventV2, context: Context) => {
  return { statusCode: 200, body: JSON.stringify({ foo: "bar" }) };
};
