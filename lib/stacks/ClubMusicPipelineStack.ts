import * as cdk from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {CodePipeline, CodePipelineSource, ShellStep} from 'aws-cdk-lib/pipelines';

export class ClubMusicPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'ClubMusic',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('clubmusic/ClubMusicCDK', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      }),
    });

    // pipeline.addStage(new ClubMusicProductionStage(this, 'Production', {
    //   env: {
    //     account: '289866763058',
    //     region: 'ap-southeast-2',
    //   }
    // }));
  }
}
