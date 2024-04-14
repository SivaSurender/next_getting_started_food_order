import sql from "better-sqlite3";

//   name of the db creayed in init db ??
const db = sql("meals.db");

export async function getMeals() {
  //  artificial delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //  cam run also instead of all ?
  // throw new Error("Error");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  // return db.prepare("SELECT * FROM meals WHERE slug = " + slug); --> prone to sql injection
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
