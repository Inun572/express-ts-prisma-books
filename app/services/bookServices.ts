import { prisma } from '../config/prismaClient';

const bookServices = {
  get: async () => {
    return await prisma.book.findMany({
      include: {
        author: true,
        publisher: true,
        category: true,
      },
    });
  },

  find: async (id: number) => {
    return await prisma.book.findUnique({ where: { id } });
  },
};

export default bookServices;
