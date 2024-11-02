const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=jq5QGAzA#eTxRObPoWNafydLQ3l_9qxJkHdXzk-AuUoJvtZH7Ug4",
MONGODB: process.env.MONGODB || "mongodb+srv://vishwamihi22:vishwamihi22@cluster0.y6r9gav.mongodb.net",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
