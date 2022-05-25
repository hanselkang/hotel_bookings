import './App.css';
import { useEffect, useState } from 'react';


import { getBookings, removeBooking as apiRemoveBooking, checkinBooking } from "./BookingService";
import BookingGrid from './components/BookingGrid';
import BookingsForm from './components/BookingForm';

function App() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings()
      .then((data) => {
        console.log(data);
        setBookings(data)
      })
  }, []);



  const addBooking = (booking) => {
    let temp = bookings.map(g => g);
    temp.push(booking);
    setBookings(temp);
  }

  const removeBooking = (id) => {
    apiRemoveBooking(id).then(() => {
      let temp = bookings.map(g => g);
      const toDel = bookings.map(g => g._id).indexOf(id);
      temp.splice(toDel, 1);
      setBookings(temp);
    })


  }

  const setCheckedIn = (booking) => {
    console.log("lol")
    const temp = [...bookings]
    const indexToBeUpdated = temp.indexOf(booking)

    const bookingToBeUpdated = temp[indexToBeUpdated]
    bookingToBeUpdated.booking.checkin = !bookingToBeUpdated.booking.checkin

    setBookings[temp]
    checkinBooking({ checkedin: bookingToBeUpdated.booking.checkin })

    // setCheckIn(!checkin)
    // handleCheckIn(booking)
  }



  return (
    <div className="App">
      <BookingGrid bookings={bookings} removeBooking={removeBooking} setCheckedIn={setCheckedIn}/>
      <BookingsForm addBooking={addBooking}/>
    </div>
  );
}

export default App;
