use hotels;
db.dropDatabase();
db.bookings.insertMany([
    {
        name: "Fucsia Dickins",
        email: "sutherland@suther.suth",
        startdate: "2022-08-01",
        enddate: "2022-08-03",
        checkin: false
    },
    {
        name: "Yellow Wagtail",
        email: "wagtail@wagt.wag",
        startdate: "2022-05-25",
        enddate: "2022-05-29",
        checkin: true
    }
]);w