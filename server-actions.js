//  executes in server
"use server";

import { redirect } from "next/navigation";
import { saveMyMeal } from "./lib/getmeals";

// helper fn

const isInvalid = function (text) {
  return !text || text.trim() === "";
};
//  wont work if use client and use server on same file so moving to to separate file
//  if useform state it takes two args fist one previous state
export async function sendMeal(_, receivedFormData) {
  const meal = {
    title: receivedFormData.get("title"),
    summary: receivedFormData.get("summary"),
    instructions: receivedFormData.get("instructions"),
    image: receivedFormData.get("image"),
    creator: receivedFormData.get("name"),
    creator_email: receivedFormData.get("email"),
  };

  if (
    isInvalid(meal.title) ||
    isInvalid(meal.summary) ||
    isInvalid(meal.instructions) ||
    isInvalid(meal.creator) ||
    isInvalid(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "Invalid Input" };
  }
  await saveMyMeal(meal);
  console.log(meal);
  redirect("/meals");
}
