// import { PrismaClient } from '@prisma/client';

// declare global {
// 	var prisma: PrismaClient | undefined;
// }

// export const db = globalThis.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== 'production') globalThis.prisma = db

import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient()

// async function main() {
//   // ... you will write your Prisma Client queries here
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })