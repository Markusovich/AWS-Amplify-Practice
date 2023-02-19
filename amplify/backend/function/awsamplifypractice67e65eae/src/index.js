/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    console.log(event);
    const customerId = event.pathParameters.customerId;
    const customer = { customerId: customerId, customerName: "Customer " + customerId}; //Replace with database call
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      }, 
        body: JSON.stringify(customer),
    };
};
