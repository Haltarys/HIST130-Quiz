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

export type FeedbackEmailResponse = {
  success: boolean;
  message: string;
};

export async function sendFeedback(
  data: FeedbackFormData,
): Promise<FeedbackEmailResponse> {
  return emaijs
    .send(serviceID, templateID, data)
    .then(() => ({ success: true, message: 'Feedback sent.' }))
    .catch((err) => ({ success: false, message: err.text }));
}
