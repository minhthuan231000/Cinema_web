import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
    SplineSeries,
    Title,
    Tooltip,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Animation } from '@devexpress/dx-react-chart';
import { EventTracker } from '@devexpress/dx-react-chart';

export const theaters = {
    2020: [
        { theater: 'BHD Star 3/2', quality: 50, total: 987000 },
        { theater: 'BHD Star Bitexco', quality: 100, total: 3000000 },
        { theater: 'BHD Star Phạm Hùng', quality: 30, total: 1100000 },
        { theater: 'CGV Pandora City', quality: 107, total: 7100000 },
        { theater: 'CGV Vivo City', quality: 95, total: 4300000 },
        { theater: 'Lotte Cộng Hoà', quality: 150, total: 7500000 },
        { theater: 'Lotte Phú Thọ', quality: 120, total: 5300000 },
        { theater: 'CGV Vincom Đồng Khởi', quality: 110, total: 2500000 },
        { theater: 'CGV Vincom Thủ Đức', quality: 54, total: 2300000 }
    ],
    2021: [
        { theater: 'BHD Star 3/2', quality: 100, total: 1000000 },
        { theater: 'BHD Star Bitexco', quality: 200, total: 4300000 },
        { theater: 'BHD Star Phạm Hùng', quality: 30, total: 1100000 },
        { theater: 'CGV Pandora City', quality: 50, total: 1200000 },
        { theater: 'CGV Vivo City', quality: 127, total: 7150000 },
        { theater: 'Lotte Cộng Hoà', quality: 105, total: 4340000 },
        { theater: 'Lotte Phú Thọ', quality: 180, total: 7520000 },
        { theater: 'CGV Vincom Đồng Khởi', quality: 150, total: 5380000 },
        { theater: 'CGV Vincom Thủ Đức', quality: 120, total: 2590000 }
    ],
    2022: [
        { theater: 'BHD Star 3/2', quality: 170, total: 856000 },
        { theater: 'BHD Star Bitexco', quality: 150, total: 3574000 },
        { theater: 'BHD Star Phạm Hùng', quality: 30, total: 1100000 },
        { theater: 'CGV Pandora City', quality: 10, total: 1198000 },
        { theater: 'CGV Vivo City', quality: 33, total: 6150000 },
        { theater: 'Lotte Cộng Hoà', quality: 84, total: 3340000 },
        { theater: 'Lotte Phú Thọ', quality: 120, total: 5520000 },
        { theater: 'CGV Vincom Đồng Khởi', quality: 110, total: 3380000 },
        { theater: 'CGV Vincom Thủ Đức', quality: 90, total: 1890000 }
    ],
};
export const movies = {
    2020: [
        { movie: 'Zack Snyder is Justice', quality: 100, total: 1987000 },
        { movie: 'Captain Marvel', quality: 140, total: 3000000 },
        { movie: 'Godzilla vs. Kong', quality: 80, total: 1100000 },
        { movie: 'The Turning', quality: 102, total: 2000000 },
        { movie: 'Catch Me If You Can', quality: 95, total: 4300000 },
        { movie: 'The Empty Man', quality: 150, total: 7500000 },
        { movie: 'Collectors', quality: 70, total: 3000000 },
        { movie: 'Darkest Hour', quality: 110, total: 2500000 },
        { movie: 'Prince of Persia: The Sands of Time', quality: 54, total: 2300000 },
        { movie: 'Chef', quality: 74, total: 2600000 },
        { movie: 'Freaky', quality: 104, total: 5200000 },
    ],
    2021: [
        { movie: 'Zack Snyder is Justice', quality: 100, total: 1000000 },
        { movie: 'Captain Marvel', quality: 200, total: 4300000 },
        { movie: 'Godzilla vs. Kong', quality: 30, total: 1100000 },
        { movie: 'The Turning', quality: 50, total: 1200000 },
        { movie: 'Catch Me If You Can', quality: 127, total: 7150000 },
        { movie: 'The Empty Man', quality: 105, total: 4340000 },
        { movie: 'Collectors', quality: 180, total: 7520000 },
        { movie: 'Darkest Hour', quality: 150, total: 5380000 },
        { movie: 'Prince of Persia: The Sands of Time', quality: 120, total: 2590000 },
        { movie: 'Chef', quality: 64, total: 2400000 },
        { movie: 'Freaky', quality: 105, total: 5330000 },
    ],
    2022: [
        { movie: 'Zack Snyder is Justice', quality: 170, total: 856000 },
        { movie: 'Captain Marvel', quality: 150, total: 3574000 },
        { movie: 'Godzilla vs. Kong', quality: 30, total: 1100000 },
        { movie: 'The Turning', quality: 10, total: 1198000 },
        { movie: 'Catch Me If You Can', quality: 33, total: 6150000 },
        { movie: 'The Empty Man', quality: 84, total: 3340000 },
        { movie: 'Collectors', quality: 120, total: 5520000 },
        { movie: 'Darkest Hour', quality: 110, total: 3380000 },
        { movie: 'Prince of Persia: The Sands of Time', quality: 90, total: 1890000 },
        { movie: 'Chef', quality: 34, total: 1400000 },
        { movie: 'Freaky', quality: 110, total: 5450000 },
    ],
};
const option = [2020, 2021, 2022];
const option2 = [2020, 2021, 2022];

export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: theaters[2020], // init default
            data2: movies[2020]
        };
        this.changeData = this.changeData.bind(this);
        this.id = undefined;
        this.index = 1;

        this.changeData2 = this.changeData2.bind(this);
        this.id2 = undefined;
        this.index2 = 1;
    }
    // Muốn tự động thay đổi data từ uncomment
    /* componentDidMount() {
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
    } */

    changeData(e) {
        this.setState({ data: theaters[e.target.value] });
    }
    changeData2(e) {
        this.setState({ data2: movies[e.target.value] });
    }
    render() {
        const { data: chartData } = this.state;
        const { data2: chartData2 } = this.state;
        return (
            <div>
                <Paper>
                    <Chart
                        data={chartData}
                        width={chartData.length * 180 }
                    >
                        <ValueScale name="sale" /> {/* value cột sale từ obj sales (bên trái) */}
                        <ValueScale name="total" /> {/* value cột sale từ obj sales (bên phải) */}

                        <ArgumentAxis />
                        <ValueAxis scaleName="sale" showGrid={false} showLine showTicks />
                        <ValueAxis scaleName="total" position="right" showGrid={false} showLine showTicks />

                        <BarSeries
                            name="Số vé bán ra"
                            valueField="quality" // Field quality
                            argumentField="theater" // Groupby month
                            scaleName="sale"
                        />

                        <SplineSeries
                            name="Doanh Thu"
                            valueField="total" // Field total
                            argumentField="theater" // Groupby month
                            scaleName="total"
                        />
                        <Animation />
                        <Legend />
                        <Title
                            text="Thống kê doanh thu công ty theo cụm rạp (VND)"
                        />
                        <EventTracker />
                        <Tooltip />
                    </Chart>
                    <select id="select" style={{ width: '100px', margin: '10px' }} onChange={this.changeData}>
                        <option>{option[0]}</option>
                        <option>{option[1]}</option>
                        <option>{option[2]}</option>
                    </select>
                </Paper>
                <Paper>
                    <Chart
                        data={chartData2}
                        rotated={true}
                        height={chartData2.length * 50} 
                    >
                        <ValueScale name="sale" />
                        <ValueScale name="total" />

                        <ArgumentAxis />
                        <ValueAxis scaleName="sale" showGrid={false} showLine showTicks />
                        <ValueAxis scaleName="total" position="right" showGrid={false} showLine showTicks />

                        <BarSeries
                            name="Số vé bán ra"
                            valueField="quality" // Field quality
                            argumentField="movie" // Groupby month
                            scaleName="sale"
                        />

                        <SplineSeries
                            name="Doanh Thu"
                            valueField="total" // Field total
                            argumentField="movie" // Groupby month
                            scaleName="total"
                        />
                        <Animation />
                        <Legend />
                        <Title
                            text="Thống kê doanh thu công ty theo phim (VND)"
                        />
                        <EventTracker />
                        <Tooltip />
                    </Chart>
                    <select id="select" style={{ width: '100px', margin: '10px' }} onChange={this.changeData2}>
                        <option>{option2[0]}</option>
                        <option>{option2[1]}</option>
                        <option>{option2[2]}</option>
                    </select>
                </Paper>
            </div>
        );
    }
}
