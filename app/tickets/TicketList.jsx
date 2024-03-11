import React from 'react'

async function getTickets() {
    const res = await fetch('http://localhost:4000/tickets')

    return res.json()
}

export default async function TicketList() {
  const tickets = await getTickets()
  
  return (
    <>
      {tickets.map((tickets) => {
        <div key={tickets.id} className="card my-5">
            <h3>{tickets.title}</h3>
            <p>{tickets.body.slice(0,200)}</p>
            <div className={`pill ${tickets.priority}`}>
                {tickets.priority} Priority
            </div>
        </div>
      })}
      {tickets.length === 0 && (
        <p className="text-center">There are no tickets</p>
      )}
    </>

  )
}
