import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
    SplineSeries,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Animation } from '@devexpress/dx-react-chart';
import { sales as data } from './demo-data/data-vizualization';

const option = [2017, 2018, 2019];
export default class Demo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data[2017],
        };
        this.changeData = this.changeData.bind(this);
        this.id = undefined;
        this.index = 1;
    }

    componentDidMount() {
        const selectElement = document.getElementById('select');
        this.id = setInterval(() => {
            selectElement.selectedIndex = this.index;
            this.setState({ data: data[option[this.index]] });
            if (this.index === 2) {
                this.index = 0;
            } else {
                this.index += 1;
            }
        }, 4000);
    }

    componentWillUnmount() {
        clearTimeout(this.id);
    }

    changeData(e) {
        this.setState({ 
            data: data[e.target.value] 
        });
    }

    render() {
        const { data: chartData } = this.state;

        return (
            <Paper style={{width: '900px'}}>
                <Chart
                    data={chartData}
                >
                    <ValueScale name="sale" />
                    <ValueScale name="total" />

                    <ArgumentAxis />
                    <ValueAxis scaleName="sale" showGrid={false} showLine showTicks />
                    <ValueAxis scaleName="total" position="right" showGrid={false} showLine showTicks />

                    <BarSeries
                        name="Units Sold"
                        valueField="sale"
                        argumentField="month"
                        scaleName="sale"
                    />

                    <SplineSeries
                        name="Total Transactions"
                        valueField="total"
                        argumentField="month"
                        scaleName="total"
                    />
                    <Animation />
                    <Legend />
                </Chart>
                <select id="select" style={{ width: '100px', margin: '10px' }} onChange={this.changeData}>
                    <option>{option[0]}</option>
                    <option>{option[1]}</option>
                    <option>{option[2]}</option>
                </select>
            </Paper>
        );
    }
}