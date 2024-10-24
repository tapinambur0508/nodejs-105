import { registerUser, loginUser } from '../services/auth.js';

export async function registerController(req, res) {
  const payload = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  const registeredUser = await registerUser(payload);

  res.send({ status: 200, message: 'User registered', data: registeredUser });
}

export async function loginController(req, res) {
  const { email, password } = req.body;

  const session = await loginUser(email, password);

  res.send(session);
}
