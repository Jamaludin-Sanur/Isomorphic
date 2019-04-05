import React from 'react';
import { Input, Row, Col, TimePicker } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import { getBooking, editBooking } from '../../redux/booking/action';
import IntlMessages from '../../../components/utility/intlMessages';
import './index.css';


class Booking extends React.Component {

    state = {
        arrivalTime: null,
    }

    onBookingCodeKeyPress(evt) {

        // filter enter being press
        if (evt.which === 13 || evt.keyCode === 13) {
            this.props.getBooking(evt.target.value)
            return;
        }

        // filter alpha numeric and set uppercase
        let key = String.fromCharCode(!evt.charCode ? evt.which : evt.charCode);
        const regex = /^[A-Za-z0-9]+$/;
        if (!regex.test(key)) {
            evt.preventDefault();
            return false;
        } else {
            evt.preventDefault();
            evt.target.value = evt.target.value + key.toUpperCase();
        }

    }

    onArrivalTimeClose(isOpen) {
        if(!isOpen){
            let codeBooking = this.props.booking.getResult.codeBooking;
            let arrivalTime = this.state.arrivalTime || "00:00";
            this.props.editBooking( codeBooking, arrivalTime);
        }
    }

    onArrivalTimeChange(time, timeString) {
        let state = this.state;
        state.arrivalTime = timeString
        this.setState( state );
    }

    render() {

        if (this.props.booking.loading)
            return <p>loading ...</p>
        else if (this.props.booking.error)
            return <p>Ups.. There was an error</p>

        const bookingData = this.props.booking.getResult;

        
        return (
            <Row className="booking">

                {/* Display booking */}
                <Row className="booking-input" type="flex" justify="center">
                    <div>
                        <p className="booking-input-title" justify="center">Your Booking Code</p>
                        <Input className="booking-input-form" placeholder="XJHK878DSF43" onKeyPress={this.onBookingCodeKeyPress.bind(this)} />
                    </div>
                </Row>

                {/* Display result */}
                {bookingData && (
                    <Row className="booking-result">

                        {/* Display Image */}
                        <img className="booking-result-photo" src={bookingData.photo} alt="user" />

                        {/* Display greeting */}
                        <div><IntlMessages id="booking.greeting" />&nbsp;{bookingData.name + "!"}</div>
                        <div><IntlMessages id="booking.result" /></div>

                        {/* Display booking property */}
                        <Row type="flex">
                            <Col span={3}><IntlMessages id="booking.propertyName" /></Col>
                            <Col span={20}><span className="txt-bold">{bookingData.propertyName}</span></Col>
                        </Row>

                        {/* Display checkin & checkout */}
                        <Row type="flex">
                            <Col span={3}>
                                <IntlMessages id="booking.checkIn" />
                            </Col>
                            <Col span={4}>
                                <span className="txt-bold">{moment(bookingData.checkIn).format("DD MMMM YYYY")}</span>
                            </Col>
                            <Col span={3}>
                                <IntlMessages id="booking.checkOut" />
                            </Col>
                            <Col >
                                <span className="txt-bold">{moment(bookingData.checkOut).format("DD MMMM YYYY")}</span>
                            </Col>
                        </Row>

                        <Row type="flex">
                            <Col span={3}><IntlMessages id="booking.arrivalTime" /></Col>

                            {/* Display arrival time not set */}
                            {!bookingData.arrivalTime &&
                                <Col span={21}>
                                    <TimePicker
                                        defaultValue={moment('00:00', "HH:mm")}
                                        format={"HH:mm"}
                                        onChange={this.onArrivalTimeChange.bind(this)}
                                        onOpenChange={this.onArrivalTimeClose.bind(this)}
                                    />
                                    &nbsp;
                                    (<IntlMessages id="booking.arrivalTimeNotExist" />)
                                </Col>
                            }

                            {/* Display arrival time is set */}
                            {bookingData.arrivalTime &&
                                <Col span={20}>
                                    <span>{bookingData.arrivalTime}</span> &nbsp;
                                    {/* Display edit arrival time success */}
                                    {this.props.booking.editResult && ( <span>(<IntlMessages id="booking.arrivalTimeExist" />)</span>) } 
                                </Col>
                            }

                        </Row>
                    </Row>
                )}

                {/* Display empty result */}
                {bookingData === null && (
                    <Row>
                        <p>Data not found</p>
                    </Row>
                )}
            </Row>
        )

    }
}

const mapStateToProps = state => {
    return { booking: state.booking };
}

export default connect(mapStateToProps, { getBooking, editBooking })(Booking);
