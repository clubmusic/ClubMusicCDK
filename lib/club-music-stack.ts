import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {CodePipeline, CodePipelineSource, ShellStep} from "aws-cdk-lib/pipelines";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ClubMusicStack extends cdk.Stack {

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'ClubMusicPipeline', {
      pipelineName: 'ClubMusic',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('clubmusic/ClubMusicCDK', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      }),
    });

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'ClubmusiccdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
