export type FeedbackFormData = {
  object: string;
  email?: string;
  message: string;
};

export async function sendFeedback({
  object,
  email,
  message,
}: FeedbackFormData) {
  console.log(object, email, message);

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 3000));
}
