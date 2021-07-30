function sendMail(message){
  const { GATSBY_MAIL_DOMAIN, GATSBY_MAIL_KEY, GATSBY_MAIL_TO, GATSBY_MAIL_FROM} = process.env;
  const mailgun = require('mailgun-js')({apiKey: GATSBY_MAIL_KEY, domain: GATSBY_MAIL_DOMAIN});
  const data = {
    from: GATSBY_MAIL_FROM,
    to: GATSBY_MAIL_TO,
    subject: 'portfolio contact',
    text: message
  };
  mailgun.messages().send(data, (error, body) => {
    if (error) console.log('Error:', error)
  });
}

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  console.log(body);
  const message = 'testing netflify & mailgun'
  // sendMail(message)
  return {
    statusCode: 200,
    body: JSON.stringify({message})
  }  
}