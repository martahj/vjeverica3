// @flow
import React, { PureComponent } from 'react';
import TimePicker from 'material-ui/TimePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import leapYear from 'leap-year';
import {
  monthsList,
  numberOfDaysInMonth,
} from 'util/dateCheatSheet';
import type { NumberField, NumberFieldWithValidation } from './types';

type DatePickerProps = {
  updateTime: Function,
  updateDate: Function,
  updateMonth: Function,
  updateYear: Function,
  date: NumberFieldWithValidation,
  month: NumberField,
  year: NumberField,
  initialDateForDisplay: Date | null,
}

type DatePickerState = {
  daysInMonth: number,
  displayTimeDate: Date | null,
  yearsToOffer: Array<number>,
};

class DatePicker extends PureComponent {
  props: DatePickerProps;
  state: DatePickerState;
  constructor(props: DatePickerProps) {
    super(props);
    const daysInMonth: number = numberOfDaysInMonth(props.month.value, leapYear(props.year.value));
    const displayTimeDate: (Date | null) = props.initialDateForDisplay || null;
    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getYear();
    const yearsToOffer: Array<number> = [
      currentYear - 1,
      currentYear,
      currentYear + 1,
      currentYear + 2
    ];
    this.state = {
      daysInMonth,
      displayTimeDate,
      yearsToOffer,
    };
  }

  componentWillReceiveProps(nextprops: DatePickerProps): void {
    debugger
    const stateToUpdate = {};
    const monthChanged = this.props.month.value !== nextprops.month.value;
    const yearChanged = this.props.year.value !== nextprops.year.value;
    if (monthChanged || yearChanged) {
      const daysInMonth = numberOfDaysInMonth(nextprops.month.value, leapYear(nextprops.year));
      if (daysInMonth !== this.state.daysInMonth) stateToUpdate.daysInMonth = daysInMonth;
    }
    if (Object.keys(stateToUpdate).length) {
      this.setState({
        ...stateToUpdate,
      });
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
    this.props.updateMonth(month);
  }

  handleDateChange = (event: Event, index: number, date: number):void => {
    console.log('in date change with date', date);
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
    console.log('date', date, 'month', month, 'year', year);
    return (
      <div>
        <TimePicker
          format="ampm"
          hintText='Event Time'
          onChange={this.handleChangeTime}
          value={displayTimeDate}
        />
        <SelectField
          value={date.value}
          onChange={this.handleDateChange}
          errorText={date.error}
          hintText='Date'
          floatingLabelText='Date'
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
          hintText='Month'
          floatingLabelText='Month'
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
          hintText='Year'
          floatingLabelText='Year'
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
