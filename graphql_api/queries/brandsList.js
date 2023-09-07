import { util } from "@aws-appsync/utils";

export function request(ctx) {
    return {
        operation: "Query",
        query: {
            expression: "PK = :PK",
            expressionValues: {
                ":PK": util.dynamodb.toDynamoDB("Brand")
            }
        }
    }
}

export function response(ctx) {
    return ctx.result.items;
}