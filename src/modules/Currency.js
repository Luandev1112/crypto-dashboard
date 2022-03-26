import React from "react";
import { connect } from "react-redux";
import { InputGroup, FormControl } from 'react-bootstrap'
import HeadingModule from '../components/Layout/HeadingComponent/Heading';

const RestoreWalletModule = () => {
    const addCurrency = [
        {
            id: 1,
            image: 'assets/image/Australia.png',
            heading: 'AUD',
            peregraph: 'Australian Dollar',
            activeCurrency: 'active'
        },
        {
            id: 2,
            image: 'assets/image/Brazil.png',
            heading: 'BRL',
            peregraph: 'Brazilian Real',
            activeCurrency: 'unactive'
        },
        {
            id: 3,
            image: 'assets/image/Canada.png',
            heading: 'CAD',
            peregraph: 'Canadian Dollar',
            activeCurrency: 'unactive'
        },
        {
            id: 4,
            image: 'assets/image/Switzerland.png',
            heading: 'CHF',
            peregraph: 'Swiss France',
            activeCurrency: 'unactive'
        },
        {
            id: 5,
            image: 'assets/image/China.png',
            heading: 'CNY',
            peregraph: 'Chinese Yuan',
            activeCurrency: 'unactive'
        },
        {
            id: 6,
            image: 'assets/image/Germany.png',
            heading: 'DEM',
            peregraph: 'Germany',
            activeCurrency: 'unactive'
        },
        {
            id: 7,
            image: 'assets/image/EUROPE.png',
            heading: 'EURO',
            peregraph: 'Europe',
            activeCurrency: 'unactive'
        },
        {
            id: 8,
            image: 'assets/image/France.png',
            heading: 'EURO',
            peregraph: 'France',
            activeCurrency: 'unactive'
        },
        {
            id: 9,
            image: 'assets/image/England.png',
            heading: 'AUD',
            peregraph: 'England',
            activeCurrency: 'unactive'
        },
        {
            id: 10,
            image: 'assets/image/HongKong.png',
            heading: 'BRL',
            peregraph: 'Hong Kong',
            activeCurrency: 'unactive'
        },
        {
            id: 11,
            image: 'assets/image/India.png',
            heading: 'INR',
            peregraph: 'India',
            activeCurrency: 'unactive'
        },
        {
            id: 12,
            image: 'assets/image/Japan.png',
            heading: 'CHF',
            peregraph: 'Japan',
            activeCurrency: 'unactive'
        },
        {
            id: 13,
            image: 'assets/image/Kuwait.png',
            heading: 'CNY',
            peregraph: 'Kuwait',
            activeCurrency: 'unactive'
        },
        {
            id: 14,
            image: 'assets/image/SriLanka.png',
            heading: 'DEM',
            peregraph: 'Sri Lanka',
            activeCurrency: 'unactive'
        },
        {
            id: 15,
            image: 'assets/image/Maldives.png',
            heading: 'EURO',
            peregraph: 'Maldives',
            activeCurrency: 'unactive'
        },
        {
            id: 16,
            image: 'assets/image/Norway.png',
            heading: 'EURO',
            peregraph: 'Norway',
            activeCurrency: 'unactive'
        }
    ];
    return (
        <>
            <section className="zl_currency_page">
                <HeadingModule name={'Currency'} />
                <div className="zl_all_page_comman_content">
                    <InputGroup className="zl_add_currency_search">
                        <InputGroup.Text className="zl_add_currency_search_icon">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10.0972" cy="10.0968" r="8.58064" stroke="#828CAE" strokeWidth="2" />
                                <path d="M15.9678 16.8709L20.2968 21.2" stroke="#828CAE" strokeWidth="2" />
                            </svg>
                        </InputGroup.Text>
                        <FormControl
                            placeholder="Search"
                            type="text"
                        />
                    </InputGroup>
                    <div className="zl_add_currency_row row">
                        {addCurrency.map((currencyValue, i) => (
                            <div className={`zl_add_currency_column col ${currencyValue.activeCurrency}`} key={i}>
                                <div className="zl_add_currency_inner_content">
                                    <div className="zl_add_currency_img">
                                        <img src={currencyValue.image} alt="currency-img" />
                                    </div>
                                    <div className="zl_add_currency_text">
                                        <h3>{currencyValue.heading}</h3>
                                        <p>{currencyValue.peregraph}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default connect(null, null)(RestoreWalletModule);
