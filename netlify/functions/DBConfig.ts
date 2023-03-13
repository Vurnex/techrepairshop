import { Handler } from "@netlify/functions";
import { withPlanetscale } from "@netlify/planetscale";

export const handler: Handler = withPlanetscale(async (event, context) => {
  const {
    planetscale: { connection },
  } = context;

  const { body } = event;

  if (!body) {
    return {
      statusCode: 400,
      body: "Missing body",
    };
  }

  const { name, email, subject, message } = JSON.parse(body);

  await connection.execute("INSERT INTO names (name, email, subject, message) VALUES (?, ?, ?, ?)", [
    name,
    email,
    subject,
    message
  ]);

  return {
    statusCode: 201,
  };
});
