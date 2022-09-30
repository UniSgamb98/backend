import errorHandler from 'errorhandler';
import mongoose from 'mongoose';
import app from './app';
import { config } from './configs/configs'

/**
 * Error Handler. Provides full stack
 */
if (app.get("env") === "development") {
    console.log("  Using errorhandler");
    app.use(errorHandler());
}

mongoose.
    connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('connected to Database');
    })
    .catch((err) => {
        console.log(err);
    });

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode  🚀🚀",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;