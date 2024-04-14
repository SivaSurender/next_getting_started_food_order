import MealsGrid from "@/components/meals/meal-grid";
import Link from "next/link";
import React from "react";
import classes from "./page.module.css";
import { getMeals } from "@/lib/getmeals";

//  async can be used in next js as server side R
export default async function MealsPage() {
  //  get from meals

  const meals = await getMeals();

  console.log(meals, "mealz");
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
