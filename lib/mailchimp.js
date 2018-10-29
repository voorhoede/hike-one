require('dotenv').config();

module.exports = ({ email }) => {
  console.log(email)
  const data = {
    members: [{
      email_address: email,
      status: 'subscribed',
    }]
  }

  return fetch(`https://us9.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `apiKey ${process.env.MAILCHIMP_API_KEY}`
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .catch(err => console.log(err.message))
}
