import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import DateRange from './DateRange'
import Select from 'react-select'
import Chart from './Chart'
import 'react-select/dist/react-select.css'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Chart />
                <ArticleList articles={this.props.articles} />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi = {true}/>

                {getDateRangeAsString(this.state)}
                <DateRange startDate={new Date(2016, 9, 1)} stopDate={new Date()} onChange={this.handleRangeChange}/>
            </div>
        )
    }

    handleChange = selected => this.setState({ selected: selected });

    //обновляем весь state, следовательно все дерево, при изменении диапазона, видимо не очень хорошо
    handleRangeChange = selectedRange => this.setState({
        fromDay: selectedRange.fromDay,
        toDay: selectedRange.toDay
    });
}

function getDateRangeAsString(range) {
    return getDateString(range.fromDay) + " - " + getDateString(range.toDay);
}

function getDateString(date) {
    return date ? date.toString() : "";
}

export default App