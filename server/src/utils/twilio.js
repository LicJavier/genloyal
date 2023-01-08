import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const TWILIO_SID= process.env.TWILIO_SID;
const TWILIO_TOKEN= process.env.TWILIO_TOKEN;
const client = twilio( TWILIO_SID , TWILIO_TOKEN )

//----------------------------------------------------------------------------------------------
//-------------------------SANDOBOX +1 415 523 8886 with code join constantly-oil --------------
//----------------------------------------------------------------------------------------------
// 
export default async function whatsappMsj( phone ) {
    client.messages 
    .create({ 
        body:  `Hemos recibido tus datos, puedes acceder a nuestra web, https://www.genloyal.com para mas información`, 
        from: 'whatsapp:+14155238886',       
        to: `whatsapp:+${phone}`
    }) 
    .then(message => console.log(message.sid)) 
    .done();
}
