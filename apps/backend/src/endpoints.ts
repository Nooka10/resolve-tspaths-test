import {type Express} from "express";

export const setupEndpoints = (app: Express): void => {
	app.get("/test", async (_, response) => {
		response.send("Test");
	});
};
