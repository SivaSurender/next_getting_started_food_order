//  executes in server
"use server";
//  wont work if use client and use server on same file so moving to to separate file
export async function sendMeal(receivedFormData) {
  const meal = {
    title: receivedFormData.get("title"),
    summary: receivedFormData.get("summary"),
    instructions: receivedFormData.get("instructions"),
    image: receivedFormData.get("image"),
    creator: receivedFormData.get("name"),
    creator_email: receivedFormData.get("email"),
  };
  console.log(meal);
}
