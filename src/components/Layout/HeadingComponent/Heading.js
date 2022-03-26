import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

// import { mapStateToProps } from './mappers';

const HeadingModule = (props) => {

    return (
        <>
            <div className="zl_all_page_heading_section">
                <div className="zl_all_page_heading">
                    <h2>{props.name}</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing & industry.</p>
                </div>
                <div className="zl_all_page_notify_logout_btn">
                    <Dropdown className="zl_all_page_notification_dropdown">
                        <Dropdown.Toggle id="dropdown-basic">
                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5 0C3.92954 0 2.98173 0.691642 2.65518 1.71108L0 10H10L7.34482 1.71108C7.01827 0.691641 6.07046 0 5 0ZM3.5 11C3.22386 11 3 11.2239 3 11.5C3 11.7761 3.22386 12 3.5 12H6.5C6.77614 12 7 11.7761 7 11.5C7 11.2239 6.77614 11 6.5 11H3.5Z" fill="white" />
                            </svg>
                            15
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <div className="zl_all_page_notification_body">
                                <h2 className="zl_all_page_notification_heading">NOTIFICATIONS</h2>
                                <div className="zl_all_page_notification_list">
                                    <img src="assets/image/Avatar.png" alt="user-img" className="zl_all_page_notification_user_img" />
                                    <div className="zl_all_page_notification_list_body">
                                        <h3 className="zl_all_page_notification_list_heading">
                                            Clifford Hale
                                            <span>Sent you a message</span>
                                        </h3>
                                        <p className="zl_all_page_notification_list_peregraph">
                                            Lorem Ipsum is simply dummy text of industry.?
                                        </p>
                                        <span className="zl_all_page_notification_list_time">2 hours ago</span>
                                    </div>
                                    <Button className="zl_all_page_notification_list_more_btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                        </svg>
                                    </Button>
                                </div>
                                <div className="zl_all_page_notification_list">
                                    <div className="zl_all_page_notification_user_img zl_user_green_bg">L</div>
                                    <div className="zl_all_page_notification_list_body">
                                        <h3 className="zl_all_page_notification_list_heading">
                                            Lottie Marsh
                                            <span>Sent you a coin</span>
                                        </h3>
                                        <p className="zl_all_page_notification_list_peregraph">
                                            Lorem Ipsum is simply dummy text of industry.?
                                        </p>
                                        <div className="zl_all_page_notification_list_price">
                                            <p>+380.234<span>LTC</span></p>
                                            <Link to={'/dashboard'}>Open my wallet</Link>
                                        </div>
                                        <span className="zl_all_page_notification_list_time">3 hours ago</span>
                                    </div>
                                    <Button className="zl_all_page_notification_list_more_btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                        </svg>
                                    </Button>
                                </div>
                                <div className="zl_all_page_notification_list">
                                    <div className="zl_all_page_notification_user_img zl_user_pink_bg">B</div>
                                    <div className="zl_all_page_notification_list_body">
                                        <h3 className="zl_all_page_notification_list_heading">
                                            BTC
                                            <span>News</span>
                                        </h3>
                                        <p className="zl_all_page_notification_list_peregraph">
                                            Lorem Ipsum is simply dummy text of industry.?
                                        </p>
                                        <div className="zl_all_page_notification_list_price">
                                            <Sparklines data={[0, 5, 0, 15, 12, 14]} margin={6} className="zl_add_currency_mini_chart">
                                                <SparklinesLine style={{ strokeWidth: 10, stroke: "#309AFF", fill: "none", curve: "smooth" }} />
                                                <SparklinesSpots size={4}
                                                    style={{ stroke: "#309AFF", strokeWidth: 3, fill: "white" }} />
                                            </Sparklines>
                                            <p>+39.69%<span>LTC</span></p>
                                            <Link to={'/dashboard'}>Trade now</Link>
                                        </div>
                                        <span className="zl_all_page_notification_list_time">3 hours ago</span>
                                    </div>
                                    <Button className="zl_all_page_notification_list_more_btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                        </svg>
                                    </Button>
                                </div>
                                <div className="zl_all_page_notification_list">
                                    <img src="assets/image/Avatar.png" alt="user-img" className="zl_all_page_notification_user_img" />
                                    <div className="zl_all_page_notification_list_body">
                                        <h3 className="zl_all_page_notification_list_heading">
                                            Clifford Hale
                                            <span>Sent you a message</span>
                                        </h3>
                                        <p className="zl_all_page_notification_list_peregraph">
                                            Lorem Ipsum is simply dummy text of industry.?
                                        </p>
                                        <div className="zl_all_page_notification_list_price">
                                            <p>+380.234<span>LTC</span></p>
                                            <Link to={'/dashboard'}>Open my wallet</Link>
                                        </div>
                                        <span className="zl_all_page_notification_list_time">2 hours ago</span>
                                    </div>
                                    <Button className="zl_all_page_notification_list_more_btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                        </svg>
                                    </Button>
                                </div>
                                <div className="zl_all_page_notification_more_list_btn">
                                    <Link to={'/dashboard'}>See All</Link>
                                </div>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link to={'/login'} className="zl_all_page_logout_btn">Log Out</Link>
                </div>
            </div>
        </>
    );
}

export default connect(null, null)(HeadingModule);
