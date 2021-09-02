import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as MercurialPro from '../lib/mercurial.pro-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new MercurialPro.MercurialProStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
