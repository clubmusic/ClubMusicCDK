#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ClubMusicPipelineStack } from '../lib/stacks';

const app = new cdk.App();

new ClubMusicPipelineStack(app, 'PipelineStack', {
    env: {
        account: '289866763058',
        region: 'ap-southeast-2',
    }
});

app.synth();