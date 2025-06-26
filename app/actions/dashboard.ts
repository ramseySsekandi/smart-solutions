import { prisma } from '@/lib/db';

export async function getAllContacts() {
  return await prisma.contact.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getAllQuotations() {
  return await prisma.quotation.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getAllFeedback() {
  return await prisma.feedback.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function respondToContact(id: string, response: string) {
  return await prisma.contact.update({
    where: { id },
    data: { responded: true, response },
  });
}

export async function respondToQuotation(id: string, response: string) {
  return await prisma.quotation.update({
    where: { id },
    data: { responded: true, response },
  });
}

export async function respondToFeedback(id: string, response: string) {
  return await prisma.feedback.update({
    where: { id },
    data: { responded: true, response },
  });
}
