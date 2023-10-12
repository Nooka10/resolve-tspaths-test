import {setupEndpoints} from "backend/src/endpoints";
import cors from "cors";
import express from "express";

const main = async (): Promise<void> => {
	const app = express();
	app.use(cors());

	setupEndpoints(app);

	app.listen(3000, () => {
		console.log("Server up and running on port", `${3000}`);
	});
};

void main();
