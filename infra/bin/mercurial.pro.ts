#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { MercurialProStack } from "../lib/mercurial.pro-stack";

const app = new cdk.App();
new MercurialProStack(app, "MercurialProStack", {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
