import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Logo from './dojo-logo.png'

export default function Nav() {
  return (
    <nav>
        <Image 
            src={Logo} 
            alt='Dojo logo'
            width={70}
            quality={100}
            placeholder='blur'
        />
        <h2>Dojo arts</h2>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
