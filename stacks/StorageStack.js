import * as sst from '@serverless-stack/resources';

export default class StorageStack extends sst.Stack {
    // Public refernce tho the bucket
    bucket;
    // Public refernce to the table
    table;
    constructor(scope, id, props){
        super(scope, id, props);

        // Create the DynamoDB taple
        this.table = new sst.Table(this, "Notes", {
            fields: {
                userId: sst.TableFieldType.STRING,
                noteId: sst.TableFieldType.STRING
            },
            primaryIndex: { partitionKey: "userId", sortKey: "noteId" }
        });

        //Create an S3 bucket
        this.bucket = new sst.Bucket(this, "Uploads");

    }
}