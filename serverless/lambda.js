/**
 * Returns JSON 'Hello Innovation Lab' 
 */
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: { "message": "Hello Innovation Lab!" },
    };
    return response;
};
