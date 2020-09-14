import EmailTemplate from 'email-templates';
import config from '@config';
const email = new EmailTemplate({
  message: {
    from: config.emailSender
  },
  send: true,
  preview: false,
  views: {
    options: {
      extension: 'hbs'
    },
    root: 'server/emails'
  },
  transport: {
    host: 'smtp.mailtrap.io',
    port: 2525,
    ssl: false,
    tls: true,
    auth: {
      user: config.emailUsername,
      pass: config.emailPassword
    }
  }
});

export default function sendMail(templateName, recipient, templateVariables) {
  email.send({
    template: templateName,
    message: {
      to: recipient
    },
    locals: templateVariables
  });
}
