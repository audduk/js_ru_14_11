import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    static propTypes = {
        onChange:  PropTypes.func,
        startDate: PropTypes.object, //должна быть дата, не нашел как проверить тип
        stopDate:  PropTypes.object  //должна быть дата, не нашел как проверить тип
    };

    state = {
        fromDay: null,
        toDay: null
    };

    componentWillMount() {
        this.setState({
            fromDay: this.props.startDate,
            toDay: this.props.stopDate
        });
    }

    render() {
        return (
            <div>
                <DayPicker
                    initialMonth={ this.props.startDate }
                    selectedDays={ day => DateUtils.isSameDay(this.state.fromDay, day) }
                    onDayClick={ this.handleFromDayClick }/>
                <DayPicker
                    initialMonth={ this.props.stopDate }
                    selectedDays={ day => DateUtils.isSameDay(this.state.toDay, day) }
                    onDayClick={ this.handleToDayClick }/>
            </div>
        );
    }

    //событие изменения значения (внутренний обработчик, вызов колбека)
    internalRangeChange = range => {
      if (this.props.onChange)
          this.props.onChange({
              fromDay: range.fromDay,
              toDay: range.toDay
          })
    };

    handleToDayClick = (e, day, modifiers) => {
        this.setState({toDay: day});
        this.internalRangeChange({
            fromDay: this.state.fromDay,
            toDay: day
        });
    };

    handleFromDayClick = (e, day, modifiers) => {
        this.setState({fromDay: day});
        this.internalRangeChange({
            fromDay: day,
            toDay: this.state.toDay
        });
    }
}

export default DateRange