import Highcharts from 'highcharts';

import {
    HighchartsProvider,
    HighchartsChart,
    Chart,
    XAxis,
    YAxis,
    BarSeries,
    Legend,
    Tooltip
} from "react-jsx-highcharts";

import data from "./assets/data.json";

const isMobile = window.innerWidth < 640;



export default function Graf({ id }: { id: string }) {

    const numericId = parseInt(id) - 1;
    const thisData = data[numericId].data;
    const title = data[numericId].title;
    const categories = data[numericId].categories;
    const groups = ["Euronadšenci", "Příznivci", "Vlažní příznivci", "Nejistí", "Odpůrci", "Skalní odpůrci"]

    return (
        <div>
            <h2 className="text-center">{title}</h2>
            <HighchartsProvider Highcharts={Highcharts}>

                <HighchartsChart plotOptions={{
                    bar: {
                        pointWidth: 60,
                        pointPadding: 0,
                        groupPadding: 0.125,
                        events: {
                            legendItemClick: function () {
                                return false;
                            }
                        }
                    },
                    series: {
                        animation: false,
                        states: { hover: { enabled: false } }, // disable hover
                    }
                }}>
                    <Chart type="bar" height={isMobile ? 115 : 176 * 0.7} marginLeft={120} marginBottom={0} marginRight={20} />
                    <XAxis type="category" categories={["Celá populace"]} />
                    <YAxis max={100} reversedStacks={false} labels={{ enabled: false }}>
                        {
                            categories.map((category, index) => {
                                return <BarSeries key={crypto.randomUUID()} name={category} data={[thisData[0][index]]} stacking="normal" rever />
                            })
                        }
                    </YAxis>
                    <Legend verticalAlign='top' floating={false} />
                    <Tooltip valueDecimals={1} valueSuffix=" %" />
                </HighchartsChart>
                <HighchartsChart plotOptions={{
                    bar: {
                        pointPadding: 0,
                        groupPadding: 0.125,
                    },
                    series: {
                        animation: false,
                        states: { hover: { enabled: false } }, // disable hover
                    }
                }}>
                    <Chart type="bar" height={isMobile ? 240 : 320} margin={[0, 20, 50, 120]} />
                    <XAxis type="category" categories={groups} />
                    <YAxis max={100} reversedStacks={false} labels={{ formatter: function () { return this.isLast ? `${this.value} %` : this.value.toString() } }}>
                        {categories.map((category, index) => {
                            return <BarSeries key={crypto.randomUUID()} name={category} data={groups.map((_group, groupindex) => thisData[groupindex + 1][index])} stacking="normal" />
                        }
                        )}
                    </YAxis>
                    <Tooltip valueDecimals={1} valueSuffix=" %" />
                </HighchartsChart>
            </HighchartsProvider>
        </div>
    )
}
