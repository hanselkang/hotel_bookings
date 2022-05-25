import BookingCustomer from "./BookingCustomer";

const BookingGrid = ({ bookings, removeBooking, setCheckedIn }) => {
    const bookingList = bookings.map((booking) => {
        return <BookingCustomer booking={booking} key={booking._id} removeBooking={removeBooking} setCheckedIn={setCheckedIn
} />
    })

    return (
        <>
            {bookingList}
        </>
    )
}


export default BookingGrid
