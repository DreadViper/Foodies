import sql from 'better-sqlite3'
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs'
// import path from 'path';
// import { error } from 'node:console';
// import { redirect } from 'next/dist/server/api-utils';
// const dbPath = path.resolve(__dirname, '../meals.db');
const db = sql('meals.db')
 
export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve,5000));
    // throw new Error("Loading page fales")
    return db.prepare('SELECT * FROM meals').all()
}

export function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export async function saveMeal(meal){
    meal.slug = slugify(meal.title , {lower : true})
    meal.instructions = xss(meal.instructions )
    const extension = meal.image.name.split('.').pop()
    const fileName = `${meal.slug } ${extension}`
    const stream = fs.createWriteStream(`public/images/${fileName}`)

    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage) , (error) => 
        {
            if(error){
                throw new error("File Image not loaded")
            }
        }
    )

    meal.image = `/images/${fileName}`

    db.prepare(`
        INSERT INTO meals
        (title,slug,summary,instructions,creator,creator_email ,image )
        VALUES(
            @title,
            @slug,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image
        )
    `).run(meal);

}