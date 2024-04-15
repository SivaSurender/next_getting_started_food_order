"use client";
import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { sendMeal } from "@/server-actions";
import MealSubmission from "@/components/meals/meal-submit-button";
import { useFormState } from "react-dom";

export default function ShareMeal() {
  //  takes two args 1. final, 2. initial
  const [state, formAction] = useFormState(sendMeal, { message: null });
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker name="image" label="your-image" />
          {state.message && <h4>{state.message}</h4>}
          <p className={classes.actions}>
            {/* <button type="submit">Share Meal</button> */}
            <MealSubmission />
          </p>
        </form>
      </main>
    </>
  );
}
