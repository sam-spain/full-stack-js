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

export default function sendMail(template, recipient, templateVariables) {
  email.send({
    template: template,
    message: {
      to: recipient
    },
    locals: templateVariables
  });
}
