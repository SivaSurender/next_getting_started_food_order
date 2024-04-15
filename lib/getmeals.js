import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

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

export function saveMyMeal(meal) {
  //  since slug is needed for db and intended to be created from title
  //  lower - lowercase
  meal.slug = slugify(meal.title, { lower: true });
  // preventing xss attacks from instructions
  meal.instructions = xss(meal.instructions);
}
