// @flow
import React, { PureComponent } from 'react';
import BigCalendar from 'react-big-calendar';
import selectn from 'selectn';
import moment from 'moment';
import EventDetailsModal from '../EventDetailsModal';
import CreateEventModal from '../CreateEventModal';

BigCalendar.momentLocalizer(moment);

type User = {
  email: string,
  admin: boolean,
};

type CalendarProps = {
  token: ?string,
  user: ?User,
  events: Array<Object>,
};

const calendarBox = {
  height: 800,
  width: '100%',
};

// - start
// - end
// - title
// - allDay
// - desc
// - link
// - location
// - Location (map?)
// - Potentially copy to calendar
// - Recurring

class Calendar extends PureComponent<CalendarProps> {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent: null,
      showEventDetails: false,
      newEventStartDate: null,
      newEventEndDate: null,
      showCreateEvent: false,
    };
  }

  handleSelectEvent = (event, e) => {
    this.setState({
      selectedEvent: event,
      showEventDetails: true,
    });
  }

  closeModal = () => {
    this.setState({
      showEventDetails: false,
      selectedEvent: null,
    });
  }

  handleDateSelect = ({ start, end }) => {
    if (!selectn('user.admin', this.props)) return;
    this.setState({
      newEventStartDate: start,
      newEventEndDate: end,
      showCreateEvent: true,
    });
  }

  hideEventCreateModal = () => {
    this.setState({ showCreateEvent: false });
  }

  render() {
    const { token, user } = this.props;
    const {
      showEventDetails,
      selectedEvent,
      showCreateEvent,
      newEventEndDate,
      newEventStartDate,
    } = this.state;
    return (
      <div style={calendarBox}>
        <link
          href="/static/react-big-calendar.css"
          rel="stylesheet"
        />
        <BigCalendar
          selectable
          events={this.props.events}
          defaultDate={new Date(2017, 8, 1)}
          onSelectEvent={this.handleSelectEvent}
          onSelecting={this.handleDateSelect}
          // style={{ width: '100%' }}
        />
        <EventDetailsModal
          open={showEventDetails}
          event={selectedEvent}
          handleClose={this.closeModal}
        />
        <CreateEventModal
          open={showCreateEvent}
          start={newEventStartDate}
          end={newEventEndDate}
          handleClose={this.hideEventCreateModal}
        />
      </div>
    );
  }
}

export default Calendar;
