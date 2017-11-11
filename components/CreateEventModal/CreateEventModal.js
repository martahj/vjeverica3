// @flow
import React, { PureComponent } from 'react';
import selectn from 'selectn';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {
  parseDate,
} from '../../lib/dateCheatSheet';
import DatePicker from './DatePicker';
import {
  urlValidation,
  // dateOfMonthValidation,
  notEmptyValidation,
} from './validations';
import type { NumberField, NumberFieldWithValidation } from './types';

/*
 * TODO make look better on mobile
*/

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
  special: boolean,
  featured: boolean,
  imageUrl: ?string,
  extendedDescription: ?string,
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
      value: 0, // TODO create error if invalid day given days in month
      error: null,
    },
    year: {
      value: 0,
      // error: null,
    },
    month: {
      value: 0,
      // error: null,
    },
    hours: {
      value: 0,
      // error: null,
    },
    minutes: {
      value: 0,
      // error: null,
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
  special: false,
  featured: false,
  imageUrl: null,
  extendedDescription: null,
};

const styles = {
  eventDetailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  // singleLineElementStyle: {
  //   width: '100%',
  //   display: 'flex',
  //   flexDirection: 'row',
  // },
  // titleStyle={
  //
  // },
  textfieldStyle: {
    width: '100%',
  },
};

class CreateEventModal extends PureComponent {
  props: CreateEventModalProps;
  state: CreateEventModalState = initialState;

  componentWillReceiveProps(nextprops: CreateEventModalProps): void {
    const stateToUpdate = {};
    if (nextprops.start !== this.props.start) {
      const { date, year, month, hours, minutes } = parseDate(nextprops.start);
      stateToUpdate.startDate = {
        date: {
          value: date,
          error: null,
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
    console.log('going to create an event', this.state);
    this.closeModal();
  }

  closeModal = (): void => {
    this.setState({ ...initialState });
    this.props.handleClose();
  }

  handleTitleChange = (event: ReactSyntheticEvent): void => {
    const { value } = event.target;
    console.log('changed value to', value);
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

  updateStartTime = (hours: number, minutes: number): void => {
    console.log('in update start time with hours', hours, 'minutes', minutes);
    this.setState({
      startDate: {
        ...this.state.startDate,
        hours: { value: hours },
        minutes: { value: minutes },
      },
    });
  }

  updateEndTime = (hours: number, minutes: number): void => {
    this.setState({
      endDate: {
        ...this.state.endDate,
        hours: { value: hours },
        minutes: { value: minutes },
      },
    });
  }

  updateStartDate = (date: number): void => {
    const year = selectn('startDate.year.value', this.state);
    const month = selectn('startDate.month.value', this.state);
    this.setState({
      startDate: {
        ...this.state.startDate,
        date: {
          value: date,
          error: this.state.startDate.error,
        },
      },
    });
  }

  updateEndDate = (date: number, dateError: ?string): void => {
    this.setState({
      endDate: {
        ...this.state.endDate,
        date: {
          error: this.state.endDate.error,
          value: date,
        },
      },
    });
  }

  updateStartDateError = (error: ?string): void => {
    this.setState({
      startDate: {
        ...this.state.startDate,
        date: {
          value: this.state.startDate.value,
          error,
        },
      },
    });
  }

  updateEndDateError = (error: ?string): void => {
    this.setState({
      endDate: {
        ...this.state.endDate,
        date: {
          value: this.state.startDate.value,
          error,
        },
      },
    });
  }

  updateStartMonth = (month: number): void => {
    this.setState({
      startDate: {
        ...this.state.startDate,
        month: { value: month },
      },
    });
  }

  updateEndMonth = (month: number): void => {
    this.setState({
      endDate: {
        ...this.state.endDate,
        month: { value: month },
      },
    });
  }

  updateStartYear = (year: number): void => {
    this.setState({
      startDate: {
        ...this.state.startDate,
        year: { value: year },
      },
    });
  }

  updateEndYear = (year: number): void => {
    this.setState({
      startDate: {
        ...this.state.endDate,
        year: { value: year },
      },
    });
  }

  handleSpecialToggle = (event: Object, isInputChecked: boolean): void => {
    this.setState({
      special: isInputChecked,
    });
  }

  handleFeaturedToggle = (event: Object, isInputChecked: boolean): void => {
    this.setState({
      featured: isInputChecked,
    });
  }

  handleImageUrlChange = (event: ReactSyntheticEvent): void => {
    const { value } = event.target;
    this.setState({
      imageUrl: value,
    });
  }

  handleExtendedDescriptionChange = (event: ReactSyntheticEvent): void => {
    const { value } = event.target;
    this.setState({
      extendedDescription: value,
    });
  }

  render() {
    console.log('CreateEventModal props', this.props, 'state', this.state);
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
      special,
      featured,
      imageUrl,
      extendedDescription,
    } = this.state;
    const submitDisabled = Boolean(
      title.error ||
      location.error ||
      url.error ||
      description.error ||
      startDate.date.error ||
      endDate.date.error,
    );
    return (
      <Dialog
        open={open}
        title="Create a New Event"
        autoScrollBodyContent
        actions={[
          <FlatButton
            label="Cancel"
            primary
            onClick={handleClose}
          />,
          <FlatButton
            label="Create"
            primary
            onClick={this.confirmCreate}
            disabled={submitDisabled}
          />,
        ]}
      >
        <div style={styles.eventDetailsWrapper}>
          <TextField
            style={styles.textfieldStyle}
            hintText="Title"
            floatingLabelText="Title"
            value={title.value}
            errorText={title.error}
            onChange={this.handleTitleChange}
          />
          <TextField
            style={styles.textfieldStyle}
            hintText="https://www.google.com"
            floatingLabelText="Link URL"
            value={url.value}
            errorText={url.error}
            onChange={this.handleUrlChange}
          />
          <TextField
            style={styles.textfieldStyle}
            hintText="Location"
            floatingLabelText="Location"
            value={location.value}
            errorText={location.error}
            onChange={this.handleLocationChange}
          />
          <TextField
            multiLine
            style={styles.textfieldStyle}
            hintText="Description"
            floatingLabelText="Description"
            value={description.value}
            errorText={description.error}
            onChange={this.handleDescriptionChange}
          />
          Start Time
          <DatePicker
            updateTime={this.updateStartTime}
            date={startDate.date}
            month={startDate.month}
            year={startDate.year}
            updateDate={this.updateStartDate}
            updateMonth={this.updateStartMonth}
            updateYear={this.updateStartYear}
            initialDateForDisplay={start}
            handleDateError={this.updateStartDateError}
          />
          End Time
          <DatePicker
            updateTime={this.updateEndTime}
            date={endDate.date}
            month={endDate.month}
            year={endDate.year}
            updateDate={this.updateEndDate}
            updateMonth={this.updateEndMonth}
            updateYear={this.updateEndYear}
            initialDateForDisplay={end}
            handleDateError={this.updateEndDateError}
          />
          <Checkbox
            label="Special Event"
            onCheck={this.handleSpecialToggle}
            checked={special}
          />
          {special && (
            <Checkbox
              label="Featured"
              onCheck={this.handleFeaturedToggle}
              checked={featured}
            />
          )}
          {special && (
            <TextField
              style={styles.textfieldStyle}
              hintText="image.jpg"
              floatingLabelText="Image URL"
              value={imageUrl}
              onChange={this.handleImageUrlChange}
            />
          )}
          {special && (
            <TextField
              multiLine
              style={styles.textfieldStyle}
              hintText="Extended Description"
              floatingLabelText="Extended Description"
              value={extendedDescription}
              onChange={this.handleExtendedDescriptionChange}
            />
          )}
        </div>
      </Dialog>
    );
  }
}

export default CreateEventModal;
