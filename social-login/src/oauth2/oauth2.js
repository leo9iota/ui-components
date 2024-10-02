import OAuth2Server from 'oauth2-server';

const oauth2 = new OAuth2Server({
    model: {
        // Define the model for storing client credentials
        getClient: async (clientId) => {
            // Replace this with your own database query to retrieve the client credentials
            const client = {
                clientId,
                clientSecret: 'client_secret',
                grants: ['authorization_code', 'refresh_token'],
                redirectUris: ['http://example.com/callback'],
            };
            return client;
        },
        // Define the model for storing access tokens
        saveToken: async (token, client) => {
            // Replace this with your own database query to store the access token
            console.log(`Saving token: ${token}`);
        },
        // Define the model for retrieving access tokens
        getToken: async (token) => {
            // Replace this with your own database query to retrieve the access token
            const accessToken = {
                token,
                clientId: 'client_id',
                expires: new Date().getTime() + 3600000, // expires in 1 hour
            };
            return accessToken;
        },
    },
});
