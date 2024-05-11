import Link from "next/link";


async function getTicket() {
    const res = await fetch('http://localhost:4000/tickets', {
        // reloading or fetching data after 30 seconds
        next: {
            revalidate: 0  //when set to zero it never cache refresh right there 
        }
    })

    return res.json()
}


export default async function TicketList() {

  const tickets = await getTicket()

  return (
    <>
    {tickets.map((tickets) => (
        <div key={tickets.id} className="card my-5">
            <Link href={`/tickets/${tickets.id}`}>
            <h3>{tickets.title}</h3>
            <p>{tickets.body.slice(0, 200)}....</p>
            <div className={`pill ${tickets.priority}`}>
                {tickets.priority} priority
            </div>
            </Link>
        </div>
    ))}
    {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
    )}
    </>
  )
}
