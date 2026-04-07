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
     reservationList.textContent = "";

    reservations.forEach((reservation, index) => {
        const row = document.createElement("tr");

        const fullNameTd = document.createElement("td");
        fullNameTd.textContent = reservation.fullName;

        const roomTypeTd = document.createElement("td");
        roomTypeTd.textContent = reservation.roomType;

        const occupancyTd = document.createElement("td");
        occupancyTd.textContent = `Adults: ${reservation.adults},   Children: ${reservation.children}`;

        const checkInTd = document.createElement("td");
        checkInTd.textContent = reservation.checkIn;

        const checkOutTd = document.createElement("td");
        checkOutTd.textContent = reservation.checkOut;

        const requestsTd = document.createElement("td");
        requestsTd.textContent = reservation.requests;


        const actionTd = document.createElement("td");
        const button = document.createElement("button");
        button.textContent = "Delete Reservation";
        button.className = "delete-btn";

        button.addEventListener ("click", () => {
            reservations.splice(index, 1);
            displayReservations();
        })

        actionTd.appendChild(button);

    row.append(fullNameTd);
    row.append(roomTypeTd);
    row.append(occupancyTd);
    row.append(checkInTd);
    row.append(checkOutTd);
    row.append(requestsTd);
    row.append(actionTd);

    reservationList.append(row);

});
}
