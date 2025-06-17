import { createClient } from "./client";

export interface FinalCTASubmission {
  name: string;
  email: string;
  role: string;
  institution?: string;
  feature?: string;
  created_at?: string;
}

export async function submitFinalCTA(data: FinalCTASubmission) {
  const supabase = createClient();
  
  try {
    // Insert the new entry
    const { data: result, error } = await supabase
      .from('final_cta')
      .insert([
        {
          name: data.name,
          email: data.email,
          role: data.role,
          institution: data.institution || null,
          feature: data.feature || null,
        }
      ])
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        throw new Error('This email is already on our waitlist!');
      }
      throw new Error('Failed to join waitlist. Please try again.');
    }

    // Send welcome email through API route
    // try {
    //   const response = await fetch('/api/send-email', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: data.email,
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Failed to send welcome email');
    //   }
    // } catch (emailError) {
    //   console.error('Error sending welcome email:', emailError);
    //   // Don't throw here - we still want to return the successful submission
    // }

    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred. Please try again.');
  }
} 