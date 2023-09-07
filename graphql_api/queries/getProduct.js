import { util } from "@aws-appsync/utils";

export function request(ctx) {
    return {
        operation: "GetItem",
        key: {
            "PK": util.dynamodb.toDynamoDB("Product"),
            "SK": util.dynamodb.toDynamoDB(ctx.args.SK)
        }
    }
}

export function response(ctx) {
    return ctx.result;
}