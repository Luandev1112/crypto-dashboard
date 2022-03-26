import React, { useState } from "react";
import { connect } from "react-redux";
import HeadingModule from '../components/Layout/HeadingComponent/Heading';
import { InputGroup, FormControl, Form } from 'react-bootstrap'

// import { mapStateToProps } from './mappers';

const addCurrency = [
    {
        id: 1,
        image: 'assets/image/Bitcoin.svg',
        heading: 'BTC',
        peregraph: 'Bitcoin',
        checkboxId: 'checkbox1',
        isChecked:'true'
    },
    {
        id: 2,
        image: 'assets/image/ETH.svg',
        heading: 'ETH',
        peregraph: 'Ethereum',
        checkboxId: 'checkbox2',
        isChecked: 'true'
    },
    {
        id: 3,
        image: 'assets/image/Litecoin.svg',
        heading: 'LTC',
        peregraph: 'Litecoin',
        checkboxId: 'checkbox3'
    },
    {
        id: 4,
        image: 'assets/image/algo.svg',
        heading: 'ALGO',
        peregraph: 'Algorand',
        checkboxId: 'checkbox4'
    },
    {
        id: 5,
        image: 'assets/image/bitcoinlight.svg',
        heading: 'BCH',
        peregraph: 'Bitcoin Cash',
        checkboxId: 'checkbox5'
    },
    {
        id: 6,
        image: 'assets/image/dash.svg',
        heading: 'DASH',
        peregraph: 'Dash Parr',
        checkboxId: 'checkbox6',
        isChecked: 'true'
    },
    {
        id: 7,
        image: 'assets/image/lumen.svg',
        heading: 'LUMEN',
        peregraph: 'Lumen Pierce',
        checkboxId: 'checkbox7'
    },
    {
        id: 8,
        image: 'assets/image/tezos.svg',
        heading: 'TEZOS',
        peregraph: 'Tezos',
        checkboxId: 'checkbox8'
    },
    {
        id: 9,
        image: 'assets/image/zcash.svg',
        heading: 'ZCASH',
        peregraph: 'Lumen',
        checkboxId: 'checkbox9'
    },
    {
        id: 10,
        image: 'assets/image/eos.svg',
        heading: 'EOS',
        peregraph: 'Eos',
        checkboxId: 'checkbox10'
    }
];

const AddCurrencyModule = () => {
   
    const [filterData, setFilterData] = useState(addCurrency);

    const search = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        const regex = new RegExp(event.target.value, 'i');
        console.log(regex);
        const filtered = addCurrency.filter((item) => {
          return ((item['peregraph'].search(regex) && item['heading'].search(regex)) > -1);
        });
        setFilterData(filtered);
    }

    return (
        <>
            <section className="zl_add_currency_page">
                <HeadingModule name={'Add Currency'} />
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
                            onChange={search}
                        />
                    </InputGroup>
                    <div className="zl_add_currency_row row">
                        {filterData.map((currencyValue, i) => (
                            <div className="zl_add_currency_column col" key={currencyValue.id}>
                                <div className="zl_add_currency_inner_content">
                                    <div className="zl_add_currency_img">
                                        <img src={currencyValue.image} alt="currency-img" />
                                    </div>
                                    <div className="zl_add_currency_text">
                                        <h3>{currencyValue.heading}</h3>
                                        <p>{currencyValue.peregraph}</p>
                                    </div>
                                    <Form.Check
                                        type="switch"
                                        id={currencyValue.checkboxId}
                                        label=""
                                        className="zl_custom_currency_checkbox"
                                        defaultChecked={currencyValue.isChecked}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default connect(null, null)(AddCurrencyModule);
