// @flow
import React, { PureComponent } from 'react';
import selectn from 'selectn';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Row, Col } from 'react-flexbox-grid';
import {
  parseDate,
} from 'util/dateCheatSheet';
import type { ErrorMessage } from 'definitions/validations';
import DatePicker from './DatePicker';
import {
  urlValidation,
  dateOfMonthValidation,
  notEmptyValidation,
} from './validations';
import type { NumberField, NumberFieldWithValidation } from './types';

type CreateEventModalProps = {
  open: boolean,
  start: ?Date,
  end: ?Date,
  handleClose: Function,
};

type InputField = {
  value: string,
  error: ErrorMessage,
};

type DateField = {
  date: NumberFieldWithValidation,
  year: NumberField,
  month: NumberField,
  hours: NumberField,
  minutes: NumberField,
};

type CreateEventModalState = {
  title: InputField,
  location: InputField,
  description: InputField,
  url: InputField,
  startDate: DateField,
  endDate: DateField,
};

const initialState: CreateEventModalState = {
  title: {
    value: '',
    error: null,
  },
  location: {
    value: '',
    error: null,
  },
  url: {
    value: '',
    error: null,
  },
  description: {
    value: '',
    error: null,
  },
  startDate: {
    date: {
      value: 0,
      error: null,
    },
    year: {
      value: 0,
      error: null,
    },
    month: {
      value: 0,
      error: null,
    },
    hours: {
      value: 0,
      error: null,
    },
    minutes: {
      value: 0,
      error: null,
    },
  },
  endDate: {
    date: {
      value: 0,
      error: null,
    },
    year: {
      value: 0,
      error: null,
    },
    month: {
      value: 0,
      error: null,
    },
    hours: {
      value: 0,
      error: null,
    },
    minutes: {
      value: 0,
      error: null,
    },
  },
};

class CreateEventModal extends PureComponent {
  props: CreateEventModalProps;
  state: CreateEventModalState = initialState;

  componentWillReceiveProps (nextprops) {
    let stateToUpdate = {};
    if (nextprops.start !== this.props.start) {
      const { date, year, month, hours, minutes } = parseDate(nextprops.start);
      stateToUpdate.startDate = {
        date: {
          value: date,
          error: dateOfMonthValidation(date, month, year),
        },
        month: { value: month },
        year: { value: year },
        hours: { value: hours },
        minutes: { value: minutes },
      };
    }
    if (nextprops.end !== this.props.end) {
      const { date, year, month, hours, minutes } = parseDate(nextprops.end);
      stateToUpdate.endDate = {
        date: {
          value: date,
          error: dateOfMonthValidation(date, month, year),
        },
        month: { value: month },
        year: { value: year },
        hours: { value: hours },
        minutes: { value: minutes },
      };
    }
    if (Object.keys(stateToUpdate).length) {
      this.setState({ ...stateToUpdate });
    }
  }

  confirmCreate = (): void => {
    alert('will create event');
    this.closeModal();
  }

  closeModal = (): void => {
    this.setState({ ...initialState });
    this.props.handleClose();
  }

  handleTitleChange = (event: ReactSyntheticEvent): void => {
    const { value } = event.target;
    this.setState({
      title: {
        value,
        error: notEmptyValidation(value),
      },
    });
  }

  handleLocationChange = (event: ReactSyntheticEvent): void => {
    const { value } = event.target;
    this.setState({
      location: {
        value,
        error: notEmptyValidation(value),
      },
    });
  }

  handleDescriptionChange = (event: ReactSyntheticEvent): void => {
    const { value } = event.target;
    this.setState({
      description: {
        value,
        error: notEmptyValidation(value),
      },
    });
  }

  handleUrlChange = (event: ReactSyntheticEvent): void => {
    const { value } = event.target;
    this.setState({
      url: {
        value,
        error: urlValidation(value),
      },
    });
  }

  updateStartTime = (hour: number, minutes: number): void => {
    this.setState({
      startDate: {
        ...this.state.startDate,
        hour: { value: hour },
        minutes: { value: minutes },
      },
    });
  }

  updateEndTime = (hour: number, minutes: number): void => {
    this.setState({
      endDate: {
        ...this.state.endDate,
        hour: { value: hour },
        minutes: { value: minutes },
      },
    });
  }

  updateStartDate = (date: number): void => {
    console.log('updating start date', date);
    const year = selectn('startDate.year.value', this.state);
    const month = selectn('startDate.month.value', this.state);
    this.setState({
      startDate: {
        ...this.state.startDate,
        date: {
          value: date,
          error: dateOfMonthValidation(date, month, year),
        },
      },
    });
  }

  updateEndDate = (date: number): void => {
    const year = selectn('endDate.year.value', this.state);
    const month = selectn('endDate.month.value', this.state);
    this.setState({
      endDate: {
        ...this.state.endDate,
        date: {
          value: date,
          error: dateOfMonthValidation(date, month, year),
        },
      },
    });
  }

  updateStartMonth = (month: number): void => {
    const year = selectn('startDate.year.value', this.state);
    const date = selectn('startDate.date.value', this.state);
    this.setState({
      startDate: {
        ...this.state.startDate,
        month: { value: month },
        date: {
          ...this.state.startDate.date,
          error: dateOfMonthValidation(date, month, year),
        },
      }
    });
  }

  updateEndMonth = (month: number): void => {
    const year = selectn('endDate.year.value', this.state);
    const date = selectn('endDate.date.value', this.state);
    this.setState({
      startDate: {
        ...this.state.endDate,
        month: { value: month },
        date: {
          ...this.state.endDate.date,
          error: dateOfMonthValidation(date, month, year),
        },
      }
    });
  }

  updateStartYear = (year: number): void => {
    const month = selectn('startDate.month.value', this.state);
    const date = selectn('startDate.date.value', this.state);
    this.setState({
      startDate: {
        ...this.state.startDate,
        year: { value: year },
        date: {
          ...this.state.startDate.date,
          error: dateOfMonthValidation(date, month, year),
        },
      }
    });
  }

  updateEndYear = (year: number): void => {
    const month = selectn('endDate.month.value', this.state);
    const date = selectn('endDate.date.value', this.state);
    this.setState({
      startDate: {
        ...this.state.endDate,
        year: { value: year },
        date: {
          ...this.state.endDate.date,
          error: dateOfMonthValidation(date, month, year),
        },
      }
    });
  }

  render() {
    const {
      open,
      start,
      end,
      handleClose,
    } = this.props;
    const {
      title,
      location,
      url,
      description,
      startDate,
      endDate,
    } = this.state;
    return (
      <Dialog
        open={open}
        title='Create a New Event'
        actions={[
          <FlatButton
            label='Cancel'
            primary
            onClick={handleClose}
          />,
          <FlatButton
            label='Create'
            primary
            onClick={this.confirmCreate}
          />
        ]}
      >
      <div>
        <Row>
          <Col xs={12} sm={3}>
            Title
          </Col>
          <Col xs={12} sm={9}>
            <TextField
              hintText='Title'
              floatingLabelText='Title'
              value={title.value}
              errorText={title.error}
              onChange={this.handleTitleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={3}>
            Link
          </Col>
          <Col xs={12} sm={9}>
            <TextField
              hintText='https://www.google.com'
              floatingLabelText='Link URL'
              value={url.value}
              errorText={url.error}
              onChange={this.handleUrlChange}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={3}>
            Event Location
          </Col>
          <Col xs={12} sm={9}>
            <TextField
              hintText='Location'
              floatingLabelText='Location'
              value={location.value}
              errorText={location.error}
              onChange={this.handleLocationChange}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={3}>
            Description
          </Col>
          <Col xs={12} sm={9}>
            <TextField
              multiLine
              hintText='Description'
              floatingLabelText='Description'
              value={description.value}
              errorText={description.error}
              onChange={this.handleDescriptionChange}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={3}>
            Start Time
          </Col>
          <Col xs={12} sm={9}>
            <DatePicker
              updateTime={this.updateStartTime}
              date={startDate.date}
              month={startDate.month}
              year={startDate.year}
              updateDate={this.updateStartDate}
              updateMonth={this.updateStartMonth}
              updateYear={this.updateStartYear}
              initialDateForDisplay={start}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={3}>
            End Time
          </Col>
          <Col xs={12} sm={9}>
            <DatePicker
              updateTime={this.updateEndTime}
              date={endDate.date}
              month={endDate.month}
              year={endDate.year}
              updateDate={this.updateEndDate}
              updateMonth={this.updateEndMonth}
              updateYear={this.updateEndYear}
              initialDateForDisplay={end}
            />
          </Col>
        </Row>
      </div>
      </Dialog>
    );
  }
}

export default CreateEventModal;
