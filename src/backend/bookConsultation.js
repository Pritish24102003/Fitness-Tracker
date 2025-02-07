require('dotenv').config();
const twilio = require('twilio');
const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const bookConsultation = (doctorId, userId, time) => {
  client.messages.create({
    to: '+1234567890', // User's phone number
    from: '+0987654321', // Twilio phone number
    body: `Consultation booked with Doctor ID: ${doctorId} at ${time}`
  })
  .then(message => console.log(message.sid))
  .catch(error => console.error(error));
};
