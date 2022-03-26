import React, { useState } from "react";
import { connect } from "react-redux";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Chart from "react-apexcharts";
import { Button, FormControl } from 'react-bootstrap'
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';
import AllTransactionList from "../TransactionList/AllTransactionList";

const BitcoinComponent = () => {
    // date picker
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    // send btn
    const [send, setSend] = useState(false);

    const handleToggle = () => {
        setSend(!send);
    };

    // charts
    const [value, onChange] = useState(new Date());
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
            curve: "smooth",
            colors: ['#F7931A'],
        },
        fill: {
            type: 'gradient',
            colors: ['rgba(247, 147, 26, 0.33)', 'rgba(45, 55, 83, 0)'],
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.2,
                stops: [0, 90, 100]
            }
        },
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
            <div className={`zl_chart_component ${send ? "active" : ""}`}>
                <div className="zl_all_page_comman_content">
                    <div className="zl_chart_box_heading_date">
                        <h2 className="zl_chart_box_heading">BTC</h2>
                        <div className="position-relative">
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
                    <div className="zl_wallet_chart_bottom_content">
                        <div className="zl_all_page_comman_total_price">
                            <p className="zl_all_page_total_price_heading">Total Balance</p>
                            <h2 className="zl_all_page_total_price_text">$6,541.1</h2>
                            <span className="zl_all_page_total_price_up_text">
                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.60609 3.60609L2.69695 4.51523C2.36222 4.84996 1.81951 4.84996 1.48477 4.51523C1.15004 4.18049 1.15004 3.63778 1.48477 3.30305L2.39391 2.39391L0 0H6V6L3.60609 3.60609Z" fill="#50E2C2" />
                                </svg>
                                +12.5%
                            </span>
                        </div>
                        <div className="zl_wallet_chart_send_recive_btn">
                            <Button className="zl_wallet_chart_send_btn" onClick={handleToggle}>
                                <svg width="15" height="15" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.60609 3.60609L2.69695 4.51523C2.36222 4.84996 1.81951 4.84996 1.48477 4.51523C1.15004 4.18049 1.15004 3.63778 1.48477 3.30305L2.39391 2.39391L0 0H6V6L3.60609 3.60609Z" fill="#252F47" />
                                </svg>
                                Send
                            </Button>
                            <Button className="zl_wallet_chart_recive_btn" onClick={handleToggle}>
                                <svg width="15" height="15" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.60609 3.60609L2.69695 4.51523C2.36222 4.84996 1.81951 4.84996 1.48477 4.51523C1.15004 4.18049 1.15004 3.63778 1.48477 3.30305L2.39391 2.39391L0 0H6V6L3.60609 3.60609Z" fill="#252F47" />
                                </svg>
                                Receive
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="zl_send_recive_content">
                    <div className="zl_send_recive_content_row">
                        <div className="zl_send_recive_content_column">
                            <div className="zl_send_recive_inner_content">
                                <h3 className="zl_send_recive_heading">
                                    <svg width="15" height="15" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.60609 3.60609L2.69695 4.51523C2.36222 4.84996 1.81951 4.84996 1.48477 4.51523C1.15004 4.18049 1.15004 3.63778 1.48477 3.30305L2.39391 2.39391L0 0H6V6L3.60609 3.60609Z" fill="#53B9EA" />
                                    </svg>
                                    Send
                                </h3>
                                <div className="zl_send_qr_address">
                                    <FormControl
                                        placeholder="Insert address"
                                    />
                                    <QRCode 
                                        value="EYdNhC7hGgHuL2sF20p2dLv"
                                        bgColor={"#3D476A"}
                                        fgColor={"#CAD3F2"}
                                        size={32}
                                        className="zl_dark_theme_qrcode"
                                    />
                                    <QRCode
                                        value="EYdNhC7hGgHuL2sF20p2dLv"
                                        bgColor={"#EFF0F2"}
                                        fgColor={"#3D476A"}
                                        size={32}
                                        className="zl_light_theme_qrcode"
                                    />
                                </div>
                                <div className="zl_send_currency_input_content">
                                    <FormControl
                                        type="number"
                                        className="zl_send_currency_input"
                                        defaultValue="500"
                                    />
                                    <div className="zl_send_currency_input_btns">
                                        <Button>1/4</Button>
                                        <Button>Half</Button>
                                        <Button>All</Button>
                                    </div>
                                </div>
                                <div className="zl_send_currency_text_type">
                                    <h3 className="zl_send_currency_text">$825.42</h3>
                                    <h3 className="zl_send_currency_type">USD</h3>
                                </div>
                                <div className="zl_send_currency_btn_text">
                                    <Button className="zl_send_currency_btn">
                                        Send
                                    </Button>
                                    <div className="zl_send_currency_text">
                                        <p>Network Fee<span>$0.16</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="zl_send_recive_content_column">
                            <div className="zl_send_recive_inner_content">
                                <h3 className="zl_send_recive_heading zl_recive_heading">
                                    <svg width="15" height="15" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.60609 3.60609L2.69695 4.51523C2.36222 4.84996 1.81951 4.84996 1.48477 4.51523C1.15004 4.18049 1.15004 3.63778 1.48477 3.30305L2.39391 2.39391L0 0H6V6L3.60609 3.60609Z" fill="#53B9EA" />
                                    </svg>
                                    Receive
                                </h3>
                                <div className="zl_recive_address_content">
                                    <p className="zl_recive_address_heading">Address</p>
                                    <div className="zl_recive_copy_address_content">
                                        <Button onClick={() => navigator.clipboard.writeText('EYdNhC7hGgHuL2sF20p2dLv')}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.48116 0H12.5365C13.3244 0 13.9653 0.641 13.9653 1.42887V4.78252H12.661V1.42887C12.661 1.36022 12.6051 1.30435 12.5365 1.30435H1.48116C1.4125 1.30435 1.35663 1.36022 1.35663 1.42887V12.4842C1.35663 12.5529 1.4125 12.6087 1.48116 12.6087H4.73024V13.9131H1.48116C0.693287 13.9131 0.0522861 13.2721 0.0522861 12.4842V1.42887C0.0523291 0.641 0.693287 0 1.48116 0Z" fill="#CAD3F2" />
                                                <path d="M7.46358 6.08691H18.5188C19.3068 6.08691 19.9478 6.72791 19.9478 7.51583V18.5711C19.9477 19.3591 19.3068 20.0001 18.5188 20.0001H7.46354C6.67562 20.0001 6.03463 19.3591 6.03463 18.5712V7.51583C6.03458 6.72791 6.67567 6.08691 7.46358 6.08691ZM7.46349 18.6957H18.5188C18.5875 18.6957 18.6434 18.6398 18.6434 18.5712V7.51583C18.6434 7.44713 18.5875 7.39126 18.5188 7.39126H7.46354C7.39484 7.39126 7.33897 7.44713 7.33897 7.51583V18.5712H7.33893C7.33893 18.6398 7.39484 18.6957 7.46349 18.6957Z" fill="#CAD3F2" />
                                            </svg>
                                        </Button>
                                        <p>EYdNhC7hGgHuL2sF20p2dLv</p>
                                    </div>
                                    <div className="zl_recive_address_qr_code">
                                        <QRCode
                                            value="EYdNhC7hGgHuL2sF20p2dLv"
                                            bgColor={"transparent"}
                                            fgColor={"#CAD3F2"}
                                            size={166}
                                            className="zl_dark_theme_qrcode"
                                        />
                                        <QRCode
                                            value="EYdNhC7hGgHuL2sF20p2dLv"
                                            bgColor={"transparent"}
                                            fgColor={"#3D476A"}
                                            size={166}
                                            className="zl_light_theme_qrcode"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="zl_transaction_list">
                    <h3 className="zl_transaction_list_main_heading">
                        Transaction
                    <Link to={'/history'}>See All</Link>
                    </h3>
                    <AllTransactionList value='Bitcoin' />
                </div>
            </div>
        </>
    );
}

export default connect(null, null)(BitcoinComponent);
