// Placeholder email sender
export default async function sendEmail(to, { subject, body }) {
  // In production, integrate with an email service (e.g., nodemailer, resend, etc.)
  console.log(`Sending email to: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Body: ${body}`);
  // Simulate async operation
  return Promise.resolve();
}
