import React from 'react'
import TicketList from './Ticketlist'
import { Suspense } from 'react'

export default function Tickets() {
  return (
    <main>
        <nav>
          <h2>Tickets</h2>
          <p><small>Currently open tickets</small></p>
        </nav>

        <Suspense fallback={<loading />}>
           <TicketList />
        </Suspense>
    </main>
  )
}
