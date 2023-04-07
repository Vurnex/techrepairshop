import { Handler } from "@netlify/functions";
import { withPlanetscale } from "@netlify/planetscale";

export const handler: Handler = withPlanetscale(async (event, context) => {
  const {
    planetscale: { connection },
  } = context;

  /*

  const { body } = event;

  if (!body) {
    return {
      statusCode: 400,
      body: "Missing body",
    };
  }

  let { name } = JSON.parse(body);

  */

  let name = "test";

  await connection.execute("INSERT INTO cron_jobs (name) VALUES (?)", [
    name,
  ]);

  return {
    statusCode: 201,
  };
});