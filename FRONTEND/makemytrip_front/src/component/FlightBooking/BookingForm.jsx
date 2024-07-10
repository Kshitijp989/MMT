import './FlightBooking.css';
import FlightIcon from "@mui/icons-material/Flight";

const BookingForm = (props) => {
    const HandlePassanger = ()=>{

    }
    return (
        <div className="main-content-wrap">
            <div className="page-title-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6">
                            <div className="page-title">
                                <h3><FlightIcon style={{ fontSize: 30, padding: 4 }}></FlightIcon> Flight Booking</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-box-style">
                <div className="others-title">
                    <h3>Booking for Flight Flight111</h3>
                </div>

                <form className="row g-4">
                    <div className="col-md-4">
                        <label htmlFor="FlightNo" className="form-label FlightNo">Flight NO</label>
                        <input type="input" className="form-control" id="FlightNo" placeholder="Flight111" readOnly={true}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="From" className="form-label">From</label>
                        <input type="input" className="form-control" id="From" placeholder="From Location" readOnly={true}/>
                    </div>
                   
                    <div className="col-4">
                        <label htmlFor="To" className="form-label">TO</label>
                        <input type="input" className="form-control" id="To" placeholder="Destination" readOnly={true}/>
                    </div>
                    <div className="col-md-3 dnone">
                        <label htmlFor="FightId" className="form-label">Flight Id</label> 
                        <input type="input" className="form-control" id="FightId" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="Class" className="form-label">Class</label> 
                        <input type="text" className="form-control" id="Class" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="Price" className="form-label">Price</label> 
                        <input type="text" className="form-control" id="Price" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="NoofPassanger" className="form-label">No of Passanger</label> 
                        <input type="text" className="form-control" id="NoofPassanger" onChange={HandlePassanger}/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="Amount" className="form-label">Amount</label> 
                        <input type="text" className="form-control" id="Amount"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="Address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="Address" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-12">
                    <label htmlFor="Passanger1" className="form-label">Passanger Details</label>
                        <table id="#PassengerTable" className="col-12">
                            <thead>
                           <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Amount</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="FirstPassanger">
                            <td>
                            <input type="text" className="form-control PassangerName" id="Passanger1" placeholder="Passenger Name" />
                            </td>
                            <td>
                            <input type="number" className="form-control" id="PassangerAge1" placeholder="Passenger Age" />
                            </td>
                            <td>
                            <input type="Gender" className="form-control" id="PassangerGender1" placeholder="Male/Female" />
                            </td>
                            <td>
                            <input type="Amount" className="form-control Price" id="Amount1" />
                            </td>

                        </tr>
                        <tr className="SecondPassanger dnone">
                            <td>
                            <input type="text" className="form-control PassangerName" id="Passanger2" placeholder="Passenger Name" />
                            </td>
                            <td>
                            <input type="number" className="form-control" id="PassangerAge2" placeholder="Passenger Age" />
                            </td>
                            <td>
                            <input type="Gender" className="form-control" id="PassangerGender2" placeholder="Male/Female" />
                            </td>
                            <td>
                            <input type="Amount" className="form-control Price" id="Amount2" />
                            </td>


                        </tr>
                        <tr className="ThirdPassanger dnone">
                            <td>
                            <input type="text" className="form-control PassangerName" id="Passanger3" placeholder="Passenger Name" />
                            </td>
                            <td>
                            <input type="number" className="form-control" id="PassangerAge3" placeholder="Passenger Age" />
                            </td>
                            <td>
                            <input type="Gender" className="form-control" id="PassangerGender3" placeholder="Male/Female" />
                            </td>
                            <td>
                            <input type="Amount" className="form-control Price" id="Amount3" />
                            </td>

                        </tr>
                        <tr className="FourthPassanger dnone">
                            <td>
                            <input type="text" className="form-control PassangerName" id="Passanger0" placeholder="Passenger Name" />
                            </td>
                            <td>
                            <input type="number" className="form-control" id="PassangerAge4" placeholder="Passenger Age" />
                            </td>
                            <td>
                            <input type="Gender" className="form-control" id="PassangerGender4" placeholder="Male/Female" />
                            </td>
                            <td>
                            <input type="Amount" className="form-control Price" id="Amount4" />
                            </td>

                        </tr>
                        </tbody>

                        </table>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="City" className="form-label">City</label>
                        <input type="text" className="form-control" id="City" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="State" className="form-label">State</label>
                        <input type="text" className="form-control" id="State" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="Zip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="Zip" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="totalAmount" className="form-label">Total Amount with Tax</label>
                        <input type="number" className="form-control" readOnly={true} id="totalAmount" />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Book Now</button>
                    </div>
                </form>
            </div>
        </div>



    )
}

export default BookingForm