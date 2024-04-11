'use client'
import React from 'react'

export default function Error({ error }){
  console.log(error)
  return (
    <main className='error'>
        <h1>An error occured !</h1>
        <p>Data cant load. Please try it Again.</p>
    </main>
  )
}
