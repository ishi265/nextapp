import React from 'react'
import Link from "next/link";

export default function notFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">There was a problem</h2>
        <p>Ticket not found.</p>
        <p>Go back to <Link href="/tickets">Tickets</Link></p>
    </main>
  )
}
