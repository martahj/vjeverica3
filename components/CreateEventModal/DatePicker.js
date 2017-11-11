// @flow
import React, { PureComponent } from 'react';
import TimePicker from 'material-ui/TimePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import selectn from 'selectn';
import leapYear from 'leap-year';
import {
  monthsList,
  numberOfDaysInMonth,
} from '../../lib/dateCheatSheet';
import { dateValidation } from './validations';
import type { NumberField, NumberFieldWithValidation } from './types';

type DatePickerProps = {
  updateTime: Function,
  updateDate: Function,
  updateMonth: Function,
  updateYear: Function,
  date: NumberFieldWithValidation,
  month: NumberField,
  year: NumberField,
  initialDateForDisplay: ?Date
}

type DatePickerState = {
  daysInMonth: number,
  displayTimeDate: Date | null,
  yearsToOffer: Array<number>,
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  section: {
    width: '25%',
  }
}

const getYearsToOffer = (currentYear: number): Array<number> => [
  currentYear - 1,
  currentYear,
  currentYear + 1,
  currentYear + 2,
];

class DatePicker extends PureComponent {
  props: DatePickerProps;
  state: DatePickerState;
  constructor(props: DatePickerProps) {
    super(props);
    const displayTimeDate = props.initialDateForDisplay || new Date();
    const month = selectn('month.value', props);
    const year = selectn('year.value', props);
    this.state = {
      displayTimeDate,
      yearsToOffer: getYearsToOffer(year),
      daysInMonth: numberOfDaysInMonth(month, leapYear(year)),
    };
  }

  componentWillReceiveProps(nextprops: DatePickerProps): void {
    const updatedState = {};
    const date = selectn('date.value', nextprops);
    const month = selectn('month.value', nextprops);
    const year = selectn('year.value', nextprops);
    const initialDateForDisplay = selectn('initialDateForDisplay', nextprops);
    const initialDateChanged = initialDateForDisplay !== selectn('initialDateForDisplay', this.props);
    if (initialDateChanged) {
      updatedState.displayTimeDate = initialDateForDisplay;
      updatedState.yearsToOffer = getYearsToOffer(year);
    }
    const dateChanged = selectn('date.value', this.props) !== date;
    const monthChanged = selectn('month.value', this.props) !== month;
    const yearChanged = selectn('year.value', this.props) !== year;
    if (monthChanged || yearChanged) {
      updatedDaysInMonth = numberOfDaysInMonth(month, leapYear(year));
      if (daysInMonth !== this.state.daysInMonth) updatedState.daysInMonth = updatedDaysInMonth;
    }
    if (updatedState.daysInMonth || dateChanged) {
      const dateError = dateValidation(date, updatedDaysInMonth);
      this.props.handleDateError(dateError);
    }
    if (Object.keys(updatedState).length) {
      this.setState(updatedState);
    }
  }

  /*
   * The MUI TimePicker passes a full date object but only allows the
   *   user to set the hour and minutes.
   * To be able to see the updated date whenever we re-open the datepicker,
   *   we store the full date object in state
   * However, since we're updating the non-time elements in the parent component,
   *   we pass the hours and minutes up the tree
   */
  handleChangeTime = (event: Event, date: Date): void => {
    this.props.updateTime(date.getHours(), date.getMinutes());
    this.setState({ displayTimeDate: date });
  }

  handleYearChange = (event: Event, index: number, year: number): void => {
    this.props.updateYear(year);
  }

  handleMonthChange = (event: Event, index: number, month: number): void => {
    console.log('in handleMonthChange with month', month);
    this.props.updateMonth(month);
  }

  handleDateChange = (event: Event, index: number, date: number): void => {
    this.props.updateDate(date);
  }

  render() {
    const {
      displayTimeDate,
      daysInMonth,
      yearsToOffer,
    } = this.state;
    const {
      date,
      month,
      year,
    } = this.props;
    return (
      <div style={styles.container}>
        <TimePicker
          format="ampm"
          hintText="Event Time"
          onChange={this.handleChangeTime}
          value={displayTimeDate}
          // style={styles.section}
          textFieldStyle={{ width: '100%' }}
        />
        <SelectField
          value={date.value}
          onChange={this.handleDateChange}
          errorText={date.error}
          hintText="Date"
          floatingLabelText="Date"
          style={styles.section}
        >
          {Array(daysInMonth).fill('').map((placeholder, idx) => (
            <MenuItem
              key={`Day_Menu_Item_${idx}`}
              value={idx + 1}
              primaryText={idx + 1}
            />
          ))}
        </SelectField>
        <SelectField
          value={month.value}
          onChange={this.handleMonthChange}
          hintText="Month"
          floatingLabelText="Month"
          style={styles.section}
        >
          {monthsList.map((monthName, idx) => (
            <MenuItem
              key={`Month_Menu_Item_${idx}`}
              value={idx}
              primaryText={monthName}
            />
          ))}
        </SelectField>
        <SelectField
          value={year.value}
          onChange={this.handleYearChange}
          hintText="Year"
          floatingLabelText="Year"
          style={styles.section}
        >
          {yearsToOffer.map(year => (
            <MenuItem
              key={`Year_Menu_Item_${year}`}
              value={year}
              primaryText={year}
            />
            ))}
        </SelectField>
      </div>
    );
  }
}



export default DatePicker;
