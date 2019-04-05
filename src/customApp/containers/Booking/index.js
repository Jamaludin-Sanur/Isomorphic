import React from 'react';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import LayoutContent from "../../../components/utility/layoutContent";
import PageHeader from '../../../components/utility/pageHeader';
import IntlMessages from '../../../components/utility/intlMessages';
import Booking from '../../components/Booking';

export default class extends React.Component {

    render() {

        return (
            <LayoutWrapper>

                <PageHeader>
                    <IntlMessages id="sidebar.guestPortal" />
                </PageHeader>

                {/* Display content */}
                <LayoutContent>
                    <Booking></Booking>
                </LayoutContent>

            </LayoutWrapper>
        )
    }

}