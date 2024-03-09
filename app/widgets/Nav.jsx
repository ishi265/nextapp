import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
        <h2>Dojo arts</h2>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
