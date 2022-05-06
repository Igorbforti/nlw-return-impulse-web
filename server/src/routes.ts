import express from 'express'
import { SubmitFeedbackUSeCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot} = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nomemailerMailAdapter = new NodemailMailAdapter()

    const submitFeedbackUSeCase = new SubmitFeedbackUSeCase(
        prismaFeedbacksRepository,
        nomemailerMailAdapter
    )

    await submitFeedbackUSeCase.execute({
        type,
        comment,
        screenshot,
    })

    return res.status(201).send()
})