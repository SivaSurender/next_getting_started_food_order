import MealsGrid from "@/components/meals/meal-grid";
import Link from "next/link";
import React, { Suspense } from "react";
import classes from "./page.module.css";
import { getMeals } from "@/lib/getmeals";
import loading from "./loading-out";

async function Meals() {
  const meals = await getMeals();

  console.log(meals, "mealz");
  return <MealsGrid meals={meals} />;
}

//  async can be used in next js as server side R by default
export default function MealsPage() {
  //  get from meals

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
        <Suspense
          fallback={
            <div className={classes.loading}>
              Fetching data, Please Wait 🙂...
            </div>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
