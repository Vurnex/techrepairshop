import { Handler } from "@netlify/functions";
import { withPlanetscale } from "@netlify/planetscale";

export const handler: Handler = withPlanetscale(async (event, context) => {
  const {
    planetscale: { connection },
  } = context;

  const data = await connection.execute("SELECT * FROM contact_submissions");

  //console.log(data.rows);

  return {
    statusCode: 201,
    body: JSON.stringify(data),
  };
});
