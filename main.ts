import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

//middlewars
import middlewares from './middlewares';

//routes
import routes from './routes';

const app = express();
const PORT = parseInt(process.env.PORT!, 10) || 3000;


// mongoose.connect(process.env.DB_URL!).then(init).catch((error) => {
//     console.log('somthing went wrong with mongodb.\n', JSON.stringify(error));
// });
init();

function init() {
    // console.log('connected to the database.');

    app.use(...middlewares);
    app.use(...routes);

    app.listen(PORT, () => {
        console.log(`server is running on host ${PORT}.`);
    });
}
