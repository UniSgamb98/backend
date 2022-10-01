import errorHandler from 'errorhandler';
import mongoose from 'mongoose';
import app from './app';
import { config } from './configs/configs'
import Logging from './utils/Logging';

/**
 * Error Handler. Provides full stack
 */
if (app.get("env") === "development") {
    Logging.info("Using errorhandler");
    app.use(errorHandler());
}

mongoose.
    connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logging.info('Connected to MongoDB');
    })
    .catch((err) => {
        Logging.error('Unable to connect:');
        Logging.error(err);
    });

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
    Logging.info(
        `App is running at http://localhost:${app.get("port")} in ${app.get("env")} mode  🚀🚀`
    );
    Logging.warn("Press CTRL-C to stop");
    console.log("-------------------------------------------------");
});

export default server;