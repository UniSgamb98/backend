import errorHandler from "errorhandler";
import app from "./app";
import { connectToDatabase } from "./configs/services/database.service"

/**
 * Error Handler. Provides full stack
 */
if (app.get("env") === "development") {
    console.log("  Using errorhandler");
    app.use(errorHandler());
}

// Connect to db
connectToDatabase();

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