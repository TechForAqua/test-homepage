import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  secure: true,
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { email, name, role, institution, feature } = await request.json();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to LeSearch AI</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #4F46E5; font-size: 24px; margin-bottom: 10px;">Welcome to LeSearch AI</h1>
      <p style="color: #6B7280; font-size: 16px;">Transforming Research Implementation</p>
    </div>

    <!-- Main Content -->
    <div style="margin-bottom: 30px;">
      <p style="font-size: 16px; margin-bottom: 20px;">
        Hi ${name || 'there'},
      </p>
      
      <p style="font-size: 16px; margin-bottom: 20px;">
        Thank you for joining the LeSearch AI waitlist! We're excited to have you on board as we revolutionize the research workflow landscape.
      </p>

      <p style="font-size: 16px; margin-bottom: 20px;">
        As a <strong>${role || 'researcher'}</strong>${institution ? ` at <strong>${institution}</strong>` : ''}, we understand the challenges you face in implementing research papers and managing complex codebases. That's exactly why we're building LeSearch AI.
      </p>

      ${feature ? `
      <div style="background-color: #F3F4F6; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
        <p style="font-size: 16px; margin: 0;">
          We're particularly excited that you're interested in our <strong>${feature}</strong> feature. We're working hard to make it even better for researchers like you.
        </p>
      </div>
      ` : ''}

      <h2 style="color: #4F46E5; font-size: 20px; margin: 30px 0 15px;">What's Next?</h2>
      
      <div style="margin-bottom: 20px;">
        <h3 style="color: #4F46E5; font-size: 18px; margin-bottom: 10px;">1. Private Beta Access (July 2025)</h3>
        <ul style="list-style-type: none; padding-left: 0;">
          <li style="margin-bottom: 8px;">✓ Early access to LeSearch AI</li>
          <li style="margin-bottom: 8px;">✓ Priority support and feature requests</li>
          <li style="margin-bottom: 8px;">✓ Direct feedback channel to our team</li>
        </ul>
      </div>

      <div style="margin-bottom: 20px;">
        <h3 style="color: #4F46E5; font-size: 18px; margin-bottom: 10px;">2. Exclusive Benefits</h3>
        <ul style="list-style-type: none; padding-left: 0;">
          <li style="margin-bottom: 8px;">✓ Early access to new features</li>
          <li style="margin-bottom: 8px;">✓ Special pricing for early adopters</li>
          <li style="margin-bottom: 8px;">✓ Direct communication with our development team</li>
        </ul>
      </div>

      <div style="margin-bottom: 20px;">
        <h3 style="color: #4F46E5; font-size: 18px; margin-bottom: 10px;">3. Community Access</h3>
        <ul style="list-style-type: none; padding-left: 0;">
          <li style="margin-bottom: 8px;">✓ Join our growing community of researchers</li>
          <li style="margin-bottom: 8px;">✓ Share insights and best practices</li>
          <li style="margin-bottom: 8px;">✓ Network with fellow researchers</li>
        </ul>
      </div>
    </div>

    <!-- Call to Action -->
    <div style="background-color: #4F46E5; padding: 20px; border-radius: 6px; text-align: center; margin-bottom: 30px;">
      <h2 style="color: #ffffff; font-size: 20px; margin-bottom: 15px;">Let's Build Something Amazing Together</h2>
      <p style="color: #ffffff; margin-bottom: 20px;">Schedule a 15-minute chat with our team</p>
      <a href="https://calendly.com/aryateja/research-chat" style="background-color: #ffffff; color: #4F46E5; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Schedule Now</a>
    </div>

    <!-- Discussion Points -->
    <div style="margin-bottom: 30px;">
      <h3 style="color: #4F46E5; font-size: 18px; margin-bottom: 15px;">We'd love to hear about:</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="margin-bottom: 8px;">• Your biggest research implementation challenges</li>
        <li style="margin-bottom: 8px;">• Features that would make your workflow more efficient</li>
        <li style="margin-bottom: 8px;">• Your vision for the future of research tools</li>
      </ul>
    </div>

    <!-- Resource -->
    <div style="background-color: #F3F4F6; padding: 20px; border-radius: 6px; margin-bottom: 30px;">
      <h3 style="color: #4F46E5; font-size: 18px; margin-bottom: 10px;">Latest Insights</h3>
      <p style="margin: 0;">
        Check out our latest article: <a href="#" style="color: #4F46E5; text-decoration: none;">"5 Ways to Debug Research Code Faster"</a>
      </p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; border-top: 1px solid #E5E7EB; padding-top: 20px;">
      <p style="margin-bottom: 10px;">
        Best regards,<br>
        <strong>Arya</strong><br>
        Founder, LeSearch AI
      </p>
      <div style="color: #6B7280; font-size: 14px;">
        <p style="margin: 5px 0;">LeSearch AI | From Paper to Code in 30 Seconds</p>
        <p style="margin: 5px 0;">research@lesearch.ai | lesearch.ai</p>
      </div>
    </div>
  </div>
</body>
</html>
`;

    const textContent = `
Hi ${name || 'there'},

Thank you for joining the LeSearch AI waitlist! We're excited to have you on board as we revolutionize the research workflow landscape.

As a ${role}${institution ? ` at ${institution}` : ''}, we understand the challenges you face in implementing research papers and managing complex codebases. That's exactly why we're building LeSearch AI.

${feature ? `We're particularly excited that you're interested in our ${feature} feature. We're working hard to make it even better for researchers like you.` : ''}

Here's what you can expect next:

1. Private Beta Access (July 2025)
   - You'll receive early access to LeSearch AI
   - Priority support and feature requests
   - Direct feedback channel to our team

2. Exclusive Benefits
   - Early access to new features
   - Special pricing for early adopters
   - Direct communication with our development team

3. Community Access
   - Join our growing community of researchers
   - Share insights and best practices
   - Network with fellow researchers

We're committed to making research implementation seamless and efficient. Your input will be invaluable in shaping the future of LeSearch AI.

Would you like to help us build a better research tool?

📅 Schedule a 15-minute chat with our team:
[calendly.com/aryateja/research-chat]

We'd love to hear about:
- Your biggest research implementation challenges
- Features that would make your workflow more efficient
- Your vision for the future of research tools

In the meantime, check out our latest insights:
📄 "5 Ways to Debug Research Code Faster" - [link to blog post]

Best regards,

Arya
Founder, LeSearch AI

---
LeSearch AI | From Paper to Code in 30 Seconds
research@lesearch.ai | lesearch.ai
`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to LeSearch AI - Transforming Research Implementation 🚀",
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 