import React from 'react';
import { Input, Row, Col, Menu, Select, Button, DatePicker } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import { getServiceOrder, insertServiceOrder, cancelServiceOrder } from '../../redux/driverService/action';
import IntlMessages from '../../../components/utility/intlMessages';

class InsertDriverServices extends React.Component {

    state = {
        timePickup: null,
        serviceId: 1
    }

    onChangePickupTime(momentDate, dateString) {
        if (momentDate) {
            let state = this.state;
            state.timePickup = momentDate.utc().format();
            this.setState(state);
        }
    }

    onServiceChange(value) {
        let state = this.state;
        state.serviceId = value;
        this.setState(state);
    }

    onSubmit() {
        let codeBooking = this.props.booking.getResult.codeBooking;
        if (codeBooking) {

            // Set order data
            let booking_id = this.props.booking.getResult.codeBooking;
            let service_id = this.state.serviceId;
            let service_order_datetime = this.state.timePickup;

            // dispatch insert service order
            this.props.insertServiceOrder(booking_id, service_id, service_order_datetime);
        }
    }

    render() {

        if (this.props.driverService.loading)
            return <p>loading ...</p>
        else if (this.props.driverService.error)
            return <p>Ups.. There was an error</p>

        return (

            <Row>
                <h3> Driver Services </h3>
                <br />

                <p>To book a driver please fill the form below then our driver can immidietly contact you </p>
                <br />

                {/* Display row pickup type */}
                <Row type="flex" justify="center">
                    <Col span={3}>
                        Pickup Type
                    </Col>
                    <Col span={21}>
                        <Select defaultValue={this.state.serviceId} onChange={this.onServiceChange.bind(this)}>
                            <Select.Option value="1">Airport to Accomodation</Select.Option>
                            <Select.Option value="2">Accomodation to Airport</Select.Option>
                        </Select>
                    </Col>
                </Row>
                <br />

                {/* Display row pickup date */}
                <Row type="flex" justify="center">
                    <Col span={3}>
                        Pickup Date
                    </Col>
                    <Col span={21}>
                        <DatePicker
                            showTime
                            placeholder="Select Time"
                            onChange={this.onChangePickupTime.bind(this)}
                        />
                    </Col>
                </Row>
                <br />

                <Button type="primary" onClick={this.onSubmit.bind(this)}>Submit</Button>
                <br />

                {/* Display insert result */}
                <Row type="flex" justify="center">

                    {/* Display insert success  */}
                    {this.props.driverService.insertResult &&
                        (<Col span={24}><p>Congratulation Insert Success</p></Col>)
                    }

                    {/* Display insert fail */}
                    {this.props.driverService.error &&
                        (<Col span={24}><p>Ups Insert Failed</p></Col>)
                    }
                </Row>
            </Row>
        )

    }
}

const mapStateToProps = state => {
    return {
        booking: state.booking,
        driverService: state.driverService
    };
}

export default connect(mapStateToProps, { getServiceOrder, insertServiceOrder })(InsertDriverServices);
