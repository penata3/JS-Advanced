function solve(input, criterion) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tickets = [];



    for (const ticketString of input) {

        let [destination, price, status] = ticketString.split('|');

        let ticket = new Ticket(destination, Number(price), status);
        tickets.push(ticket);
    }

    if (criterion === 'destination') {
        tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (criterion === 'status') {
        tickets.sort((a, b) => a.status.localeCompare(b.status))
    } else {
        tickets.sort((a, b) => a.price - b.price)
    }



    return tickets;

}



console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'

))