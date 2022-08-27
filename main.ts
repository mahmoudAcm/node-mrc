import express from 'express';

//middlewars
import middlewares from './middlewares';

//routes
import routes from './routes';

const app = express();
const PORT = parseInt(process.env.PORT!, 10) || 3000;

//middlewars
app.use(...middlewares);
app.use(...routes);

app.listen(PORT, () => {
    console.log(`server is running on host ${PORT}`);
});
