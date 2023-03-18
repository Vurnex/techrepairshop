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

  let { name, email, inquiry, subject, message, company, phone } = JSON.parse(body);

  let dateTime = new Date();

  //These fields aren't required, if empty, indicate in database that no info was provided.
  if (!company){
    company = "No Details Provided";
  }

  if (!phone){
    phone = "No Details Provided";
  }

  //console.log(name, email, inquiry, subject, message, company, phone);

  await connection.execute("INSERT INTO contact_submissions (name, email, inquiry, subject, message, company, phone, datetime) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
    name,
    email,
    inquiry,
    subject,
    message,
    company,
    phone,
    dateTime
  ]);

  return {
    statusCode: 201,
  };
});
