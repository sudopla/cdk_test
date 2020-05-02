#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkSqsStack } from '../lib/cdk-sqs-stack';

const app = new cdk.App();
new CdkSqsStack(app, 'CdkSqsStack');
