import { Router } from 'express';
const router = Router();
import { authorize } from '../oauth2/oauth2';

router.get('/authorize', async (req, res) => {
  try {
    const authorizeOptions = {
      client_id: req.query.client_id,
      response_type: req.query.response_type,
      redirect_uri: req.query.redirect_uri,
      scope: req.query.scope,
      state: req.query.state,
    };
    const user = req.user; // Replace this with your own authentication mechanism
    const authorizeResult = await authorize(authorizeOptions, user);
    res.json(authorizeResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;