import express from 'express';
const app = express();
import authorizeRouter from './authorize';
import tokenRouter from './token';

app.use('./auth/authorize', authorizeRouter);
app.use('./auth/token', tokenRouter);

app.listen(3000, () => {
    console.log('OAuth 2.0 server listening on port 3000');
});
