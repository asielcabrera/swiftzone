import { defineEventHandler, readBody } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/h3/dist/index.mjs';
import { Resend } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/resend/dist/index.mjs';

const resend = new Resend(process.env.RESEND_API_KEY);
const sendEmail = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, email, subject, message } = body;
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "All fields are required"
        })
      };
    }
    const { data, error } = await resend.emails.send({
      from: "onboarding@swiftzone.dev",
      // Use your verified domain
      to: "info@swiftzone.dev",
      // The email where you want to receive contact form submissions
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      // Optional: Send a confirmation email to the user
      reply_to: email
    });
    if (error) {
      console.error("Error sending email:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Failed to send email"
        })
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email sent successfully",
        id: data.id
      })
    };
  } catch (error) {
    console.error("Server error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal server error"
      })
    };
  }
});

export { sendEmail as default };
//# sourceMappingURL=send-email.mjs.map
