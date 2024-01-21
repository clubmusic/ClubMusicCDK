import * as cdk from 'aws-cdk-lib';
import {Construct} from "constructs";
import {StageProps} from "aws-cdk-lib";

export class ClubMusicProductionStage extends cdk.Stage {
    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);
    }
}