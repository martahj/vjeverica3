// @flow
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment';
import selectn from 'selectn';
import { Row, Col } from 'react-flexbox-grid';
import formatDateRange from 'util/formatDateRange';

export const titleStyles = {
  fontWeight: 600,
};

export const sectionStyles = {
  marginTop: 15,
  marginBottom: 15,
};


type EventDetailsModalProps = {
  open: boolean,
  handleClose: () => void,
  event: null | {
    title: string,
    allDay?: boolean,
    start: any,
    end: any,
    desc: string,
    link: string,
    location: string,
  },
};

const EventDetailsModal = ({
  open,
  handleClose,
  event,
}: EventDetailsModalProps) => {
  const title = selectn('title', event);
  const allDay = selectn('allDay', event);
  const start = selectn('start', event);
  const end = selectn('end', event);
  const desc = selectn('desc', event);
  const link = selectn('link', event);
  const location = selectn('location', event);
  const dateText = formatDateRange(start, end);
  return (
    <Dialog
      open={open}
      title={title}
      actions={[
        <FlatButton
          label="Close"
          primary
          onClick={handleClose}
        />,
      ]}
    >
      <div>
        <Row style={sectionStyles}>
          <Col xs={12} sm={3} style={titleStyles}>
              Date
          </Col>
          <Col xs={12} sm={9}>
            <div>
              {dateText}
            </div>
          </Col>
        </Row>
        <Row style={sectionStyles}>
          <Col xs={12} sm={3} style={titleStyles}>
            Location
          </Col>
          <Col xs={12} sm={9}>
            <div>
              {location}
            </div>
          </Col>
        </Row>
        <Row style={sectionStyles}>
          <Col xs={12}>
            {desc}
          </Col>
        </Row>
        <Row style={sectionStyles}>
          <Col xs={12}>
            <a href={link} target="_blank">More Information</a>
          </Col>
        </Row>
      </div>
    </Dialog>
  );
};

export default EventDetailsModal;
