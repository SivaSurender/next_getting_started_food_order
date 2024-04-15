import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

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

export async function saveMyMeal(meal) {
  //  since slug is needed for db and intended to be created from title
  //  lower - lowercase
  meal.slug = slugify(meal.title, { lower: true });
  // preventing xss attacks from instructions
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}
