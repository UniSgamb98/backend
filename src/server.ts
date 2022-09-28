import errorHandler from "errorhandler";
import app from "./app";

const mongoHelper = require('./configs/mongoHelper/mongoHelper');

/**
 * Error Handler. Provides full stack
 */
if (app.get("env") === "development") {
    console.log("  Using errorhandler");
    app.use(errorHandler());
}

// Connect to db
mongoHelper.connect();

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