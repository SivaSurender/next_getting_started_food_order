import Link from "next/link";
import React from "react";

function Meals() {
  return (
    <main>
      Meal
      <p>
        <Link href="/meals/share">Goto Share</Link>
      </p>
      <div>
        <Link href="meals/route-1">Route One</Link>
      </div>
      <div>
        <Link href="meals/route-2">Route Two</Link>
      </div>
    </main>
  );
}

export default Meals;
