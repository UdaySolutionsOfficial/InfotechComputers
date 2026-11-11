import { instituteData } from '../data/institute';

export type EnquiryContext = 
  | { type: 'general' }
  | { type: 'course'; courseName: string }
  | { type: 'upcoming-course'; courseName: string }
  | { type: 'service'; serviceTitle: string }
  | { type: 'admission' };

/**
 * Generates an official WhatsApp click-to-chat URL with a polite, pre-composed message.
 * Strict country code +91 and target WhatsApp: 9989848608.
 */
export function getWhatsAppUrl(context: EnquiryContext = { type: 'general' }): string {
  const phone = instituteData.contact.whatsapp; // 9989848608
  let message = '';

  switch (context.type) {
    case 'course':
      message = `Hello Infotech Computers! I would like to know more about the ${context.courseName} course. Please share the available course details.`;
      break;
    case 'upcoming-course':
      message = `Hello Infotech Computers! I would like to express my interest in the upcoming ${context.courseName} course. Please notify me when admissions open.`;
      break;
    case 'service':
      message = `Hello! I am interested in discussing digital solutions for: ${context.serviceTitle} with Infotech Computers & USolve. Please share consultation details.`;
      break;
    case 'admission':
      message = `Hello Infotech Computers! I would like to enquire about student admission and course batches at your Nidadavolu center.`;
      break;
    case 'general':
    default:
      message = `Hello Infotech Computers! I would like to enquire about your courses and training programs in Nidadavolu.`;
      break;
  }

  return `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates official mailto URL for digital services project enquiries directed to USolve.
 * Distinct from student enquiries to maintain strict institutional separation.
 */
export function getUSolveProjectMailto(serviceTitle?: string): string {
  const email = instituteData.collaboration.email; // usolveofficial@gmail.com
  const subject = 'Digital Project Enquiry — Infotech Computers Website';
  
  const body = `Hello USolve Team,

I am interested in discussing a digital project.

Service of interest: ${serviceTitle || 'General Software / Web Solution'}
Project requirements: 
My contact details: 

Please get in touch with me regarding the next steps.

Thank you!`;

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
