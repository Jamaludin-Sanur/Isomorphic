
const delay = (ms) => new Promise(res => setTimeout(res, ms))

// TO DO: Implement HTTP request to backend
export async function getBooking(bookingCode){
    
    // Validation
    if(!bookingCode) throw new Error("Invalid Argument on getBooking");

    // Simulate internet connection delay
    await delay(2000);

    // Return hardcode fakedata
    if(bookingCode === "1234ABCD"){
        return {
            codeBooking: "1234ABCD",
            name : "Gisella",
            photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
            propertyName: "Villa Bagus By Bukit Vista",
            checkIn: "2020-01-01:00:00Z",
            checkOut: "2020-01-05:00:00Z",
            arrivalTime : null
        }
    }else{
        return null;
    }

}

// TO DO: Implement HTTP request to backend
export async function editBooking(bookingCode, arrivalTime){

    // Validation
    if(!bookingCode || !arrivalTime) throw new Error("Invalid Argument on updateBookingData");

    // Simulate internet connection delay
    await delay(2000);

    // Return hardcode fakedata
    if(bookingCode === "1234ABCD"){
        return {
            codeBooking: "1234ABCD",
            name : "Gisella",
            photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
            propertyName: "Villa Bagus By Bukit Vista",
            checkIn: "2020-01-01:00:00Z",
            checkOut: "2020-01-05:00:00Z",
            arrivalTime
        }
    }else{
        return null;
    }

}