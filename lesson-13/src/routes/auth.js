import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  registerController,
  loginController,
  logoutController,
  refreshController,
  requestResetPasswordController,
  resetPasswordController,
  getOAuthURLController,
  confirmOAuthController,
} from '../controllers/auth.js';

import { validateBody } from '../middlewares/validateBody.js';

import {
  registerSchema,
  loginSchema,
  requestResetPasswordSchema,
  resetPasswordSchema,
  confirmOAuthSchema,
} from '../validation/auth.js';

const authRoutes = express.Router();
const jsonParser = express.json();

authRoutes.post(
  '/register',
  jsonParser,
  validateBody(registerSchema),
  ctrlWrapper(registerController),
);

authRoutes.post(
  '/login',
  jsonParser,
  validateBody(loginSchema),
  ctrlWrapper(loginController),
);

authRoutes.post('/logout', ctrlWrapper(logoutController));

authRoutes.post('/refresh', ctrlWrapper(refreshController));

authRoutes.post(
  '/request-reset-password',
  jsonParser,
  validateBody(requestResetPasswordSchema),
  ctrlWrapper(requestResetPasswordController),
);

authRoutes.post(
  '/reset-password',
  jsonParser,
  validateBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),
);

authRoutes.get('/get-oauth-url', ctrlWrapper(getOAuthURLController));

authRoutes.post(
  '/confirm-oauth',
  jsonParser,
  validateBody(confirmOAuthSchema),
  ctrlWrapper(confirmOAuthController),
);

export default authRoutes;
