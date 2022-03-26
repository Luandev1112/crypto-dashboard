import React, { useState } from "react";
import { connect } from "react-redux";
import HeadingModule from '../components/Layout/HeadingComponent/Heading';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Chart from "react-apexcharts";
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { Link } from 'react-router-dom';

// import { mapStateToProps } from './mappers';

const DashboardModule = (props) => {
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
            type: 'datetime',
            min: new Date('01 Mar 2012').getTime(),
            tickAmount: 6,
            x: new Date('14 Nov 2012').getTime(),
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
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.2,
                stops: [0, 90, 100]
            }
        },
        // markers: {
        //     size: 0,
        //     style: 'hollow',
        // },
        series: [
            {
                name: "series-1",
                type: 'datetime',
                data: [
                    [1327359600000, 30.95],
                    [1327446000000, 31.34],
                    [1327532400000, 31.18],
                    [1327618800000, 31.05],
                    [1327878000000, 31.00],
                    [1327964400000, 30.95],
                    [1328050800000, 31.24],
                    [1328137200000, 31.29],
                    [1328223600000, 31.85],
                    [1328482800000, 31.86],
                    [1328569200000, 32.28],
                    [1328655600000, 32.10],
                    [1328742000000, 32.65],
                    [1328828400000, 32.21],
                    [1329087600000, 32.35],
                    [1329174000000, 32.44],
                    [1329260400000, 32.46],
                    [1329346800000, 32.86],
                    [1329433200000, 32.75],
                    [1329778800000, 32.54],
                    [1329865200000, 32.33],
                    [1329951600000, 32.97],
                    [1330038000000, 33.41],
                    [1330297200000, 33.27],
                    [1330383600000, 33.27],
                    [1330470000000, 32.89],
                    [1330556400000, 33.10],
                    [1330642800000, 33.73],
                    [1330902000000, 33.22],
                    [1330988400000, 31.99],
                    [1331074800000, 32.41],
                    [1331161200000, 33.05],
                    [1331247600000, 33.64],
                    [1331506800000, 33.56],
                    [1331593200000, 34.22],
                    [1331679600000, 33.77],
                    [1331766000000, 34.17],
                    [1331852400000, 33.82],
                    [1332111600000, 34.51],
                    [1332198000000, 33.16],
                    [1332284400000, 33.56],
                    [1332370800000, 33.71],
                    [1332457200000, 33.81],
                    [1332712800000, 34.40],
                    [1332799200000, 34.63],
                    [1332885600000, 34.46],
                    [1332972000000, 34.48],
                    [1333058400000, 34.31],
                    [1333317600000, 34.70],
                    [1333404000000, 34.31],
                    [1333490400000, 33.46],
                    [1333576800000, 33.59],
                    [1333922400000, 33.22],
                    [1334008800000, 32.61],
                    [1334095200000, 33.01],
                    [1334181600000, 33.55],
                    [1334268000000, 33.18],
                    [1334527200000, 32.84],
                    [1334613600000, 33.84],
                    [1334700000000, 33.39],
                    [1334786400000, 32.91],
                    [1334872800000, 33.06],
                    [1335132000000, 32.62],
                    [1335218400000, 32.40],
                    [1335304800000, 33.13],
                    [1335391200000, 33.26],
                    [1335477600000, 33.58],
                    [1335736800000, 33.55],
                    [1335823200000, 33.77],
                    [1335909600000, 33.76],
                    [1335996000000, 33.32],
                    [1336082400000, 32.61],
                    [1336341600000, 32.52],
                    [1336428000000, 32.67],
                    [1336514400000, 32.52],
                    [1336600800000, 31.92],
                    [1336687200000, 32.20],
                    [1336946400000, 32.23],
                    [1337032800000, 32.33],
                    [1337119200000, 32.36],
                    [1337205600000, 32.01],
                    [1337292000000, 31.31],
                    [1337551200000, 32.01],
                    [1337637600000, 32.01],
                    [1337724000000, 32.18],
                    [1337810400000, 31.54],
                    [1337896800000, 31.60],
                    [1338242400000, 32.05],
                    [1338328800000, 31.29],
                    [1338415200000, 31.05],
                    [1338501600000, 29.82],
                    [1338760800000, 30.31],
                    [1338847200000, 30.70],
                    [1338933600000, 31.69],
                    [1339020000000, 31.32],
                    [1339106400000, 31.65],
                    [1339365600000, 31.13],
                    [1339452000000, 31.77],
                    [1339538400000, 31.79],
                    [1339624800000, 31.67],
                    [1339711200000, 32.39],
                    [1339970400000, 32.63],
                    [1340056800000, 32.89],
                    [1340143200000, 31.99],
                    [1340229600000, 31.23],
                    [1340316000000, 31.57],
                    [1340575200000, 30.84],
                    [1340661600000, 31.07],
                    [1340748000000, 31.41],
                    [1340834400000, 31.17],
                    [1340920800000, 32.37],
                    [1341180000000, 32.19],
                    [1341266400000, 32.51],
                    [1341439200000, 32.53],
                    [1341525600000, 31.37],
                    [1341784800000, 30.43],
                    [1341871200000, 30.44],
                    [1341957600000, 30.20],
                    [1342044000000, 30.14],
                    [1342130400000, 30.65],
                    [1342389600000, 30.40],
                    [1342476000000, 30.65],
                    [1342562400000, 31.43],
                    [1342648800000, 31.89],
                    [1342735200000, 31.38],
                    [1342994400000, 30.64],
                    [1343080800000, 30.02],
                    [1343167200000, 30.33],
                    [1343253600000, 30.95],
                    [1343340000000, 31.89],
                    [1343599200000, 31.01],
                    [1343685600000, 30.88],
                    [1343772000000, 30.69],
                    [1343858400000, 30.58],
                    [1343944800000, 32.02],
                    [1344204000000, 32.14],
                    [1344290400000, 32.37],
                    [1344376800000, 32.51],
                    [1344463200000, 32.65],
                    [1344549600000, 32.64],
                    [1344808800000, 32.27],
                    [1344895200000, 32.10],
                    [1344981600000, 32.91],
                    [1345068000000, 33.65],
                ]
            }
        ]
    }
    return (
        <>
            <section className="zl_dashboard_page">
                <HeadingModule name={'Dashboard'} />
                <div className="zl_all_page_comman_content">
                    <div className="zl_chart_box_heading_date">
                        <h2 className="zl_chart_box_heading">Revenue</h2>
                        <div className="zl_dashboard_datepicker position-relative">
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
                        <Chart options={options} series={options.series} type="area" height={350} />
                    </div>
                    <div className="zl_all_page_comman_total_price">
                        <p className="zl_all_page_total_price_heading">Total Revenue</p>
                        <h2 className="zl_all_page_total_price_text">$76685.41</h2>
                        <span className="zl_all_page_total_price_up_text">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6.66668V1.33334" stroke="#50E2C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 3.33334L4 1.33334L6 3.33334" stroke="#50E2C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            7,00%
                        </span>
                    </div>
                </div>
                <div className="zl_add_currency_content">
                    <h3 className="zl_bottom_content_heading">Wallets</h3>
                    <div className="zl_add_currency_row row">
                        <div className="zl_add_currency_column col">
                            <div className="zl_add_currency_inner_content">
                                <div className="zl_add_currency_icon_chart">
                                    {/* <img src="assets/image/Bitcoin.svg" alt="currency-icon" /> */}
                                    <div className="zl_currency_icon">
                                        <svg viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.96 9.45191L13.9783 13.2264H19.3666C20.3236 13.2264 21.0992 12.4443 21.0944 11.4825L21.093 11.1958C21.0884 10.2338 20.3053 9.45191 19.3482 9.45191H14.6976H13.96ZM21.7786 18.9638L21.7771 18.6608C21.772 17.5879 20.8995 16.7168 19.8322 16.7168H19.3838H13.9955L14.0159 20.9079H19.8524C20.9198 20.9079 21.7838 20.0353 21.7786 18.9638ZM23.4886 14.6793C24.5609 15.6723 25.2408 17.0875 25.2484 18.6608L25.2499 18.9638C25.2645 21.9591 22.8506 24.3969 19.8692 24.3969H19.7373L19.7449 26H16.2735L16.2657 24.3969H14.8429L14.8507 26H11.3793L11.3715 24.3969H10.5611H8.83951L8.82256 20.9079H10.5442L10.5239 16.7168L10.5068 13.2264L10.4886 9.45189H8.76694L8.75 5.9616H11.282L11.2725 4H14.7439L14.7534 5.9616H16.1763L16.1667 4H19.6383L19.6478 5.97803C22.3731 6.14423 24.5513 8.41715 24.5648 11.1958L24.5661 11.4825C24.572 12.6866 24.1667 13.7932 23.4886 14.6793Z" fill="url(#paint0_linear)" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.96 9.45191L13.9783 13.2264H19.3666C20.3236 13.2264 21.0992 12.4443 21.0944 11.4825L21.093 11.1958C21.0884 10.2338 20.3053 9.45191 19.3482 9.45191H14.6976H13.96ZM21.7786 18.9638L21.7771 18.6608C21.772 17.5879 20.8995 16.7168 19.8322 16.7168H19.3838H13.9955L14.0159 20.9079H19.8524C20.9198 20.9079 21.7838 20.0353 21.7786 18.9638ZM23.4886 14.6793C24.5609 15.6723 25.2408 17.0875 25.2484 18.6608L25.2499 18.9638C25.2645 21.9591 22.8506 24.3969 19.8692 24.3969H19.7373L19.7449 26H16.2735L16.2657 24.3969H14.8429L14.8507 26H11.3793L11.3715 24.3969H10.5611H8.83951L8.82256 20.9079H10.5442L10.5239 16.7168L10.5068 13.2264L10.4886 9.45189H8.76694L8.75 5.9616H11.282L11.2725 4H14.7439L14.7534 5.9616H16.1763L16.1667 4H19.6383L19.6478 5.97803C22.3731 6.14423 24.5513 8.41715 24.5648 11.1958L24.5661 11.4825C24.572 12.6866 24.1667 13.7932 23.4886 14.6793Z" fill="#7781A2" />
                                            </g>
                                        </svg>
                                    </div>
                                    <Sparklines data={[0, 5, 0, 15, 12, 14]} margin={6} className="zl_add_currency_mini_chart">
                                        <SparklinesLine style={{ strokeWidth: 10, stroke: "#fec74f", fill: "none", curve: "smooth" }} />
                                        <SparklinesSpots size={4}
                                            style={{ stroke: "#fec74f", strokeWidth: 3, fill: "white" }} />
                                    </Sparklines>
                                </div>
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
                            </div>
                        </div>
                        <div className="zl_add_currency_column col">
                            <div className="zl_add_currency_inner_content">
                                <div className="zl_add_currency_icon_chart">
                                    <div className="zl_currency_icon">
                                        <svg viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.48909 9.60596L0 13.2332L8.48909 17.9453L16.9748 13.2332L8.48909 9.60596Z" fill="#010101" fillOpacity="0.6" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 13.2332L8.48909 17.9452V0L0 13.2332Z" fill="#96A0C2" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.48926 0V17.9452L16.975 13.2332L8.48926 0Z" fill="#7680A0" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 14.7444L8.48909 25.9805V19.4564L0 14.7444Z" fill="#96A0C2" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.48926 19.4564V25.9805L16.9817 14.7444L8.48926 19.4564Z" fill="#7680A0" />
                                        </svg>
                                    </div>
                                    <Sparklines data={[14, 12, 15, 0, 5, 0]} margin={6} className="zl_add_currency_mini_chart">
                                        <SparklinesLine style={{ strokeWidth: 10, stroke: "#A330FF", fill: "none", curve: "smooth" }} />
                                        <SparklinesSpots size={4}
                                            style={{ stroke: "#A330FF", strokeWidth: 3, fill: "white" }} />
                                    </Sparklines>
                                </div>
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
                            </div>
                        </div>
                        <div className="zl_add_currency_column col">
                            <div className="zl_add_currency_inner_content">
                                <div className="zl_add_currency_icon_chart">
                                    <div className="zl_currency_icon">
                                        <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.7513 0H7.88132L7.06403 4.57013L15.9708 4.58264C20.3574 4.58264 21.6543 6.17551 21.6167 8.81501C21.5959 10.1702 21.0121 12.4594 20.7577 13.2017C20.0822 15.1782 18.6937 17.4382 13.4897 17.4299L4.83317 17.4257L4.01172 22H13.8567C17.3301 22 18.8063 21.5955 20.3699 20.8741C23.8392 19.2729 25.9033 15.8495 26.7289 11.3836C27.959 4.73275 26.4245 0 17.7513 0" fill="#7781A2" />
                                            <path d="M3.62358 8.7066C1.03829 8.7066 0.667172 10.3912 0.425322 11.4087C0.104246 12.743 0 13.2809 0 13.2809H10.1035C12.6888 13.2809 13.0599 11.5963 13.3017 10.5789C13.6228 9.24451 13.7271 8.7066 13.7271 8.7066H3.62358Z" fill="#7781A2" />
                                        </svg>
                                    </div>
                                    <Sparklines data={[0, 5, 0, 15, 12, 14]} margin={6} className="zl_add_currency_mini_chart">
                                        <SparklinesLine style={{ strokeWidth: 10, stroke: "#309AFF", fill: "none", curve: "smooth" }} />
                                        <SparklinesSpots size={4}
                                            style={{ stroke: "#309AFF", strokeWidth: 3, fill: "white" }} />
                                    </Sparklines>
                                </div>
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
                            </div>
                        </div>
                        <div className="zl_add_currency_column col">
                            <Link to={'/addcurrency'} className="zl_add_currency_btn_content">
                                + Add Currency
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default connect(null, null)(DashboardModule);
