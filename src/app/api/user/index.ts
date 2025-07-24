// pages/api/users/index.ts

import prisma from '../../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { name, email } = req.body;

  if (req.method === 'POST') {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.status(201).json(user);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }

  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }

  if (req.method === 'PUT') {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email },
    });
    res.status(200).json(user);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }

  if (req.method === 'DELETE') {
    const user = await prisma.user.delete({
      where: { id: Number(id) },
    });
    res.status(204).end();
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

