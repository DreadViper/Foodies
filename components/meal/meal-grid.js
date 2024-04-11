import React from 'react'
import classes from './meal-grid.module.css'
// import MealDetailPage from '@/app/meals/[mealslug]/page'
import MealItem from './meal-item'

export const MealGrid = ({meals}) => {
  // console.log(meals)
  return (
    <>
        <ul className={classes.meals}>
            {
                meals.map(meal =>
                    <li key={meal.id}>
                        <MealItem {...meal}/>
                    </li>
                    )
            }
        </ul>
    </>
  )
}
