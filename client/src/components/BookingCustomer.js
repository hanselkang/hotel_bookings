import {useState} from 'react'
const BookingCustomer = ({ booking, removeBooking, setCheckedIn }) => {

    const handleDelete = () => {
        removeBooking(booking._id).then(() => {
            removeBooking(booking._id);
        })
    }

    const handleCheckIn = () => {
        setCheckedIn()
    }

    return (
        <>
            <br />
             <div id="card">
                <p>Name: {booking.name} </p>
                <p>Email: {booking.email}</p>
                <p>Booking Dates</p>
                <p>From : {booking.startdate} To: {booking.enddate} </p>
                <p>Checked in Status : {booking.checkin ? "Checked-in" : <button onClick={handleCheckIn}>Check in</button> }</p>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <br />
        </>
    )
}


export default BookingCustomer