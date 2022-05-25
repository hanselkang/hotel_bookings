import { useState } from "react";
import { postBooking } from "../BookingService";

const BookingsForm = ({ addBooking }) => {

    const [formData, setFormData] = useState({})

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) => {
        e.preventDefault(); 
        formData["checkin"] = false;
        postBooking(formData).then((data) => {
            addBooking(data);
        })
    }

    return (
        <form onSubmit={onSubmit} id="bookings-form" >
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input onChange={onChange} type="text" id="name" required />
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" id="email" required />
            </div>
            <div className="formWrap">
                <label htmlFor="startdate">From:</label>
                <input onChange={onChange} type="date" id="startdate" required />
            </div>
            <div className="formWrap">
                <label htmlFor="enddate">To:</label>
                <input onChange={onChange} type="date" id="enddate" required />
            </div>
            <div className="formWrap">
                <input onChange={onChange} type="hidden" id="checkin" value="true" />
            </div>

            <input type="submit" value="Save" id="save" />
        </form>

    );
}

export default BookingsForm;