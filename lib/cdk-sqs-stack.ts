import * as cdk from '@aws-cdk/core';
const s3 = require('@aws-cdk/aws-s3');

export class CdkSqsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const websiteBucket = new s3.Bucket(this, 'WebBucket', {
      bucketName: 'cdk-jpla-bucket',
      websiteIndexDocument: 'index.html',
      publicReadAccess: true
    });

  }
}
