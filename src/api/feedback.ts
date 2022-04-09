import emaijs from '@emailjs/browser';

const serviceID = 'default_service';
const emailJSUserId = import.meta.env.VITE_EMAILJS_USERID;
const templateID = 'HIST130-Quiz';

emaijs.init(emailJSUserId);

export type FeedbackFormData = {
  object: 'feature' | 'bug' | 'other';
  email?: string;
  message: string;
};

export async function sendFeedback(data: FeedbackFormData) {
  return emaijs.send(serviceID, templateID, data);
}
