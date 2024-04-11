'use client'
import Link from 'next/link'
import React from 'react'
import logoImg from '@/assets/logo.png'
import classes from '@/components/main-header.module.css'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NavLink } from './nav-link'

const MainheaderLayout = () => {
  const path = usePathname()
  return (
   <header className={classes.header}>
     <p><Link href={'/'} className={classes.logo}><Image src = {logoImg} alt='logo'/>Next Level Food</Link></p>
     <nav className={classes.nav}>
        <ul>
            <li>
              <NavLink href={'/meals'}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={'/community'}>Foodies Community</NavLink>
            </li>
        </ul>
     </nav>
   </header>
  )
}

export default MainheaderLayout
