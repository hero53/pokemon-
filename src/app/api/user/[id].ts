import prisma from '../../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { name, email } = req.body;

  if (req.method === 'PUT') {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email },
    });
    res.status(200).json(user);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}