import React, { useState } from "react";
import { connect } from "react-redux";
import HeadingModule from '../components/Layout/HeadingComponent/Heading';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Chart from "react-apexcharts";
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

const PortfolioModule = () => {
    // date picker
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    // chart
    const options = {
        chart: {
            zoom: {
                enabled: true
            },
            stacked: false,
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            borderColor: '#999',
            yAxisIndex: 0,
            tickAmount: 6,
            label: {
                show: true,
                text: 'Support',
                style: {
                    colors: ['#fff'],
                    background: '#00E396'
                }
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2,
            curve: "smooth"
        },
        fill: {
            type: 'gradient',
            gradient: {
                // shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.2,
                stops: [5, 100]
            }
        },
        // markers: {
        //     size: 0,
        //     style: 'hollow',
        // },
        colors: ['#F5A623', '#31AFD6', '#F84AC1'],
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        },
        series: [
            {
                name: "BTC",
                data: [0, 22, 9, 21, 26, 5, 0]
            },
            {
                name: 'ETH',
                data: [0, 11, 40, 20, 18, 8, 0]
            },
            {
                name: 'DASH',
                data: [0, 8, 5, 31, 5, 18, 0]
            }
        ]
    }
    return (
        <>
            <section className="zl_portfolio_page">
                <HeadingModule name={'Portfolio'} />
                <div className="zl_add_currency_content zl_protfolio_currency_content">
                    <h3 className="zl_bottom_content_heading">Wallets</h3>
                    <div className="zl_add_currency_row row">
                        <div className="zl_add_currency_column col">
                            <div className="zl_add_currency_inner_content">
                                <div className="zl_add_currency_price">
                                    <div className="zl_add_currency_left_price">
                                        <h3>BTC</h3>
                                        <p>1.9678</p>
                                    </div>
                                    <div className="zl_add_currency_right_price">
                                        <span>
                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.60609 3.60609L2.69695 4.51523C2.36222 4.84996 1.81951 4.84996 1.48477 4.51523C1.15004 4.18049 1.15004 3.63778 1.48477 3.30305L2.39391 2.39391L0 0H6V6L3.60609 3.60609Z" fill="#50E2C2" />
                                            </svg>
                                            +12,5%
                                        </span>
                                        <p>$6,541.1</p>
                                    </div>
                                </div>
                                <div className="zl_add_currency_mini_chart">
                                    <Sparklines data={[10, 8, 10, 4, 6, 3, 12, 1, 14, 10, 16]} margin={6}>
                                        <SparklinesLine style={{ strokeWidth: 4, stroke: "#fec74f", fill: "none", curve: "smooth" }} />
                                        <SparklinesSpots size={4}
                                            style={{ stroke: "#fec74f", strokeWidth: 3, fill: "white" }} />
                                    </Sparklines>
                                </div>
                            </div>
                        </div>
                        <div className="zl_add_currency_column col">
                            <div className="zl_add_currency_inner_content">
                                <div className="zl_add_currency_price">
                                    <div className="zl_add_currency_left_price">
                                        <h3>ETH</h3>
                                        <p>3.2134</p>
                                    </div>
                                    <div className="zl_add_currency_right_price">
                                        <span className="zl_add_currency_down_price">
                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.60609 2.39391L2.69695 1.48477C2.36222 1.15004 1.81951 1.15004 1.48477 1.48477C1.15004 1.81951 1.15004 2.36222 1.48477 2.69695L2.39391 3.60609L0 6H6V0L3.60609 2.39391Z" fill="#E3507A" />
                                            </svg>
                                            -5.23%
                                        </span>
                                        <p>$3,452.1</p>
                                    </div>
                                </div>
                                <div className="zl_add_currency_mini_chart">
                                    <Sparklines data={[5, 7, 3, 6, 4, 7, 6, 8, 7]} margin={6} className="zl_add_currency_mini_chart">
                                        <SparklinesLine style={{ strokeWidth: 4, stroke: "#A330FF", fill: "none", curve: "smooth" }} />
                                        <SparklinesSpots size={4}
                                            style={{ stroke: "#A330FF", strokeWidth: 3, fill: "white" }} />
                                    </Sparklines>
                                </div>
                            </div>
                        </div>
                        <div className="zl_add_currency_column col">
                            <div className="zl_add_currency_inner_content">
                                <div className="zl_add_currency_price">
                                    <div className="zl_add_currency_left_price">
                                        <h3>DASH</h3>
                                        <p>38.234</p>
                                    </div>
                                    <div className="zl_add_currency_right_price">
                                        <span>
                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.60609 3.60609L2.69695 4.51523C2.36222 4.84996 1.81951 4.84996 1.48477 4.51523C1.15004 4.18049 1.15004 3.63778 1.48477 3.30305L2.39391 2.39391L0 0H6V6L3.60609 3.60609Z" fill="#50E2C2" />
                                            </svg>
                                            +39.69%
                                        </span>
                                        <p>$346.31</p>
                                    </div>
                                </div>
                                <div className="zl_add_currency_mini_chart">
                                    <Sparklines data={[10, 5, 9, 5, 11, 8, 9, 7, 9]} margin={6} className="zl_add_currency_mini_chart">
                                        <SparklinesLine style={{ strokeWidth: 4, stroke: "#309AFF", fill: "none", curve: "smooth" }} />
                                        <SparklinesSpots size={4}
                                            style={{ stroke: "#309AFF", strokeWidth: 3, fill: "white" }} />
                                    </Sparklines>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="zl_all_page_comman_content zl_protfolio_main_chart">
                    <div className="zl_chart_box_heading_date">
                        <div className="zl_chart_date_picker position-relative">
                            <DatePicker
                                selectsRange={true}
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(update) => {
                                    setDateRange(update);
                                }}
                                isClearable={true}
                                dateFormat="MMM, yyyy"
                            />
                        </div>
                    </div>
                    <div className="zl_dashboard_chart">
                        <Chart options={options} series={options.series} type="area" height={382} />
                    </div>
                    <div className="zl_all_page_comman_total_price">
                        <p className="zl_all_page_total_price_heading">Total Balance</p>
                        <h2 className="zl_all_page_total_price_text">$346.31</h2>
                        <span className="zl_all_page_total_price_up_text">
                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.60609 3.60609L2.69695 4.51523C2.36222 4.84996 1.81951 4.84996 1.48477 4.51523C1.15004 4.18049 1.15004 3.63778 1.48477 3.30305L2.39391 2.39391L0 0H6V6L3.60609 3.60609Z" fill="#50E2C2" />
                            </svg>
                            +39.69%
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default connect(null, null)(PortfolioModule);
