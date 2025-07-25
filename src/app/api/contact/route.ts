import { PrismaClient } from  '../../../generated/prisma';
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const contact = await prisma.contact.create({
      data: { name, email, message },
    });

    return new Response(JSON.stringify(contact), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Erreur API /contact :', error);
    return new Response(JSON.stringify({ error: 'Erreur interne du serveur' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
