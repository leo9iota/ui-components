import { Router } from 'express';
const router = Router();
import { token } from '../oauth2/oauth2';

router.post('/token', async (req, res) => {
    try {
        const tokenOptions = {
            grant_type: req.body.grant_type,
            code: req.body.code,
            redirect_uri: req.body.redirect_uri,
            client_id: req.body.client_id,
            client_secret: req.body.client_secret,
        };
        const tokenResult = await token(tokenOptions);
        res.json(tokenResult);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
