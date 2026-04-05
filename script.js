const form = document.getElementById("reservation-form");
const reservationList = document.getElementById("reservation-list");

let reservations = [];

form.addEventListener ("submit", (event) => {
    event.preventDefault();

const fullName = document.getElementById("fullName").value;
const roomType = document.getElementById("room").value;
const adults = document.getElementById("adults").value;
const children = document.getElementById("children").value || 0;

const checkIn = document.querySelectorAll(".date")[0].value + " " + document.querySelectorAll(".time")[0].value;
const checkOut = document.querySelectorAll(".date")[1].value + " " + document.querySelectorAll(".time")[1].value;
const requests = document.getElementById("special-requests").value;

const reservation = {
    fullName: fullName,
    roomType: roomType,
    adults: adults,
    children: children,
    checkIn: checkIn,
    checkOut: checkOut,
    requests: requests
}
reservations.push(reservation);
displayReservations();

form.reset();

});

function displayReservations () {
     reservationList.innerHTML = "";

    reservations.forEach((reservation, index) => {
        const row = `
        <tr>
            <td>${reservation.fullName}</td>
            <td>${reservation.roomType}</td>
            <td>Adults: ${reservation.adults}, Children: ${reservation.children}</td>
            <td>${reservation.checkIn}</td>
            <td>${reservation.checkOut}</td>
            <td>${reservation.requests || "None"}</td>
            <td>
                <button class="delete-btn" onClick="deleteReservation(${index})">Delete Reservation</button>
            </td>
        </tr>
        `;
        reservationList.innerHTML += row;
    });
}

function deleteReservation (index) {
    reservations.splice(index, 1);
    displayReservations();
}