import { util } from "@aws-appsync/utils"

export function request(ctx) {
    return {
        operation: "UpdateItem",
        key: {
            "PK": util.dynamodb.toDynamoDB("Product"),
            "SK": util.dynamodb.toDynamoDB(ctx.args.SK)
        },
        update: {
            expression: "SET #Type = :Type, Price = :Price",
            expressionNames: {
                "#Type": "Type"
            },
            expressionValues: {
                ":Type": util.dynamodb.toDynamoDB(ctx.args.Type),
                ":Price": util.dynamodb.toDynamoDB(ctx.args.Price)
            }
        }
    }
}

export function response(ctx) {
    return ctx.result;
}