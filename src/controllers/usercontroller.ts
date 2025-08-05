import { Request, Response } from 'express';
import { User, CreateUser } from '../types/userType';
import users from '../Utils/UserValue';



export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};

export const createUser = (req: Request<{}, {}, CreateUser>, res: Response<User | { error: string }>) => {
  const {  name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const newUser: User = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);
  res.status(201).json(newUser);
};