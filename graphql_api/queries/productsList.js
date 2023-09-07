import { util } from "@aws-appsync/utils";

export function request(ctx) {
    return {
        operation: "Query",
        query: {
            expression: "PK = :Product",
            expressionValues: {
                ":Product": util.dynamodb.toDynamoDB("Product")
            }
        }
    }
}

export function response(ctx) {
    return ctx.result.items;
}