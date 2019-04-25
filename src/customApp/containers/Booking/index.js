import React from 'react';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import LayoutContent from "../../../components/utility/layoutContent";
import PageHeader from '../../../components/utility/pageHeader';
import IntlMessages from '../../../components/utility/intlMessages';
import Booking from '../../components/Booking';
import InsertDriverServices from '../../components/DriverServices/InsertDriverServices';
import { connect } from 'react-redux';

class BookingContainer extends React.Component {

    render() {
        console.log("booking ", this.props.booking)
        return (
            <LayoutWrapper>

                <PageHeader>
                    <IntlMessages id="sidebar.guestPortal" />
                </PageHeader>

                {/* Display content */}
                <LayoutContent>

                    {/* Display Booking Component */}
                    <Booking></Booking>

                    {/* Display Insert Driver Service */}
                    { this.props.booking.getResult &&
                        <InsertDriverServices></InsertDriverServices>
                    }
                </LayoutContent>

            </LayoutWrapper>
        )
    }

}

const mapStateToProps = state => {
    return { booking: state.booking };
}

export default connect(mapStateToProps)(BookingContainer);