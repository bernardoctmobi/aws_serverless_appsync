import { util } from "@aws-appsync/utils";

export function request(ctx) {
    return {
        operation: "Query",
        query: {
            expression: "PK = :Product AND begins_with(SK, :Brand)",
            expressionValues: {
                ":Product": util.dynamodb.toDynamoDB("Product"),
                ":Brand": util.dynamodb.toDynamoDB(ctx.args.SK)
            }
        }
    }
}

export function response(ctx) {
    return ctx.result.items;
}