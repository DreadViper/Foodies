'use server'

import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals";

export default async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    creator: formData.get('name'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator_email: formData.get('email'),
    image: formData.get('image')
  }
  // console.log(meal)

  await saveMeal(meal);
  console.log(meal)
  redirect('/meals');
}

