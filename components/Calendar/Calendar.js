import React, { PureComponent } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import EventDetailsModal from '../EventDetailsModal';
import CreateEventModal from '../CreateEventModal';
import { calendarBox } from './style';

BigCalendar.momentLocalizer(moment);

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

const events = [
  {
    title: 'All Day Event',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },

  {
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },

  {
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },

  {
    title: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 9, 0, 0, 0),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Conference',
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    desc: 'Big conference for important people',
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Dinner',
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Birthday Party',
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
];

class Calendar extends PureComponent {
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
    console.log('select start', start, 'end', end);
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
          events={events}
          defaultDate={new Date(2015, 3, 1)}
          onSelectEvent={this.handleSelectEvent}
          onSelecting={this.handleDateSelect}
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
