// 'use client'
import Link from 'next/link';
import classes from './page.module.css';
import { MealGrid } from '@/components/meal/meal-grid';
// import { useEffect } from 'react';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

async function Meals() {
  const meals = await getMeals()
  return <MealGrid meals={meals} />
}

export default function MealPage() {

  // useEffect(()=>{
  //   fetch()
  // },[])
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meal , created{''}
          <span className={classes.highlight}>by You</span>
        </h1>
        <p>Choose your favorite recipes and cook it Your Self. it is easy and Fun!</p>
        <p className={classes.cta}>
          <Link href={'/meals/share'}>
            Share Your favorite recipes.
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback ={<div className={classes.loading}>Data fetching..........</div>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}