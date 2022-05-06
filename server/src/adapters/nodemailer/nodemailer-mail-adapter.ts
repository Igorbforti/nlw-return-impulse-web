import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "2183cae4f5ca56",
        pass: "c5810e5e3de8ba"
    }
});

export class NodemailMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Eu mesmo <igorbonuzzi@gmail.com>',
            subject,
            html: body,
        })
    }
}