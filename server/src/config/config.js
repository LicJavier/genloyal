import * as dotenv from 'dotenv';

dotenv.config();

const config = {
    mongodb:  {
        atlas:{
            strConn: dotenv.config().parsed.MONGO_URL
        }
    }
}

export default config;