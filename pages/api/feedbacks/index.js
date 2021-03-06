import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const handler = nextConnect()
  
  // POST /api/feedbacks Создать новый отзыв
  .post(async (req, res) => {
    const result = await prisma.feedback.create({
      data: req.body
    })
    res.statusCode = 200;
    res.json(JSON.stringify(result))
})
export default handler;
