const nodemailer = require("nodemailer");

const sendMail = async ( recoveryEmail, token ) => {
  const config = {
    host: 'smtp-mail.gmail.com',

    port: 507,
    auth: {
      user: REACT_APP_API_USER,
      pass: REACT_APP_API_KEY,
    }
  }

  const emailBody =
  `
    <div>
      <h3>Recovery password</h3>
      <br />
      <p>
        You have requested to recover your password, on the following link to reset it.
      </p>

      <p>
        Click <a href="http://localhost:3000/recovery-password?token=${token}' target="_blank">here</a>
      </p>
    </div>
  `;

  const message = {
    from: 'escrongor@gamil.com',

    to: recoveryEmail,
    subjevt: 'Recovery password | Storage administration',
    html: emailBody,
  };

  const transport = nodemailer.createTransport(config);

const info = await transport.sendMail(message);

};


module.exports = { sendMail };