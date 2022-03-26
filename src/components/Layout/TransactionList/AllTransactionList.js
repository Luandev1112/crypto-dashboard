import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Table } from 'react-bootstrap';

const transactionList = [
    {
        id: 1,
        transactionType: 'assets/image/tableBitcoin.png',
        transactionName: 'Bitcoin',
        transactionId: '5bfa9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '+0.025',
        transactionValueUpDown: 'zl_transaction_pluse',
        transactionStatus: 'Completed',
        transactionStatusUpDown: 'zl_transaction_completed',
        transactionDate: '08/26/2018'
    },
    {
        id: 2,
        transactionType: 'assets/image/tableDash.svg',
        transactionName: 'Dash Parr',
        transactionId: '8ba9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '-5.23%',
        transactionValueUpDown: 'zl_transaction_pluse',
        transactionStatus: 'Completed',
        transactionStatusUpDown: 'zl_transaction_completed',
        transactionDate: '08/26/2018'
    },
    {
        id: 3,
        transactionType: 'assets/image/tableETH.png',
        transactionName: 'Ethereum',
        transactionId: '4befa9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc',
        transactionValue: '-5.53%',
        transactionValueUpDown: 'zl_transaction_minas',
        transactionStatus: 'Failed',
        transactionStatusUpDown: 'zl_transaction_failed',
        transactionDate: '08/26/2018'
    },
    {
        id: 4,
        transactionType: 'assets/image/tableBitcoin.png',
        transactionName: 'Bitcoin',
        transactionId: '6bf9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '-5.43%',
        transactionValueUpDown: 'zl_transaction_pluse',
        transactionStatus: 'Completed',
        transactionStatusUpDown: 'zl_transaction_completed',
        transactionDate: '08/26/2018'
    },
    {
        id: 5,
        transactionType: 'assets/image/tableDash.svg',
        transactionName: 'Dash Parr',
        transactionId: '7bfa9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '+0.025',
        transactionValueUpDown: 'zl_transaction_pluse',
        transactionStatus: 'Completed',
        transactionStatusUpDown: 'zl_transaction_completed',
        transactionDate: '08/26/2018'
    },
    {
        id: 6,
        transactionType: 'assets/image/tableETH.png',
        transactionName: 'Ethereum',
        transactionId: '0fa9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '+0.025',
        transactionValueUpDown: 'zl_transaction_pluse',
        transactionStatus: 'Completed',
        transactionStatusUpDown: 'zl_transaction_completed',
        transactionDate: '08/26/2018'
    },
    {
        id: 7,
        transactionType: 'assets/image/tableBitcoin.png',
        transactionName: 'Bitcoin',
        transactionId: '5bfa9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '+0.025',
        transactionValueUpDown: 'zl_transaction_pluse',
        transactionStatus: 'Completed',
        transactionStatusUpDown: 'zl_transaction_completed',
        transactionDate: '08/26/2018'
    },
    {
        id: 8,
        transactionType: 'assets/image/tableDash.svg',
        transactionName: 'Dash Parr',
        transactionId: '8ba9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '-5.23%',
        transactionValueUpDown: 'zl_transaction_pluse',
        transactionStatus: 'Completed',
        transactionStatusUpDown: 'zl_transaction_completed',
        transactionDate: '08/26/2018'
    },
    {
        id: 9,
        transactionType: 'assets/image/tableETH.png',
        transactionName: 'Ethereum',
        transactionId: '0fa9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '+0.025',
        transactionValueUpDown: 'zl_transaction_minas',
        transactionStatus: 'Failed',
        transactionStatusUpDown: 'zl_transaction_failed',
        transactionDate: '08/26/2018'
    },
    {
        id: 10,
        transactionType: 'assets/image/tableBitcoin.png',
        transactionName: 'Bitcoin',
        transactionId: '5bfa9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '+0.025',
        transactionValueUpDown: 'zl_transaction_pluse',
        transactionStatus: 'Completed',
        transactionStatusUpDown: 'zl_transaction_completed',
        transactionDate: '08/26/2018'
    },
    {
        id: 11,
        transactionType: 'assets/image/tableDash.svg',
        transactionName: 'Dash Parr',
        transactionId: '8ba9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '-5.23%',
        transactionValueUpDown: 'zl_transaction_pluse',
        transactionStatus: 'Completed',
        transactionStatusUpDown: 'zl_transaction_completed',
        transactionDate: '08/26/2018'
    },
    {
        id: 12,
        transactionType: 'assets/image/tableETH.png',
        transactionName: 'Ethereum',
        transactionId: '0fa9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '+0.025',
        transactionValueUpDown: 'zl_transaction_pluse',
        transactionStatus: 'Completed',
        transactionStatusUpDown: 'zl_transaction_completed',
        transactionDate: '08/26/2018'
    },
    {
        id: 13,
        transactionType: 'assets/image/tableBitcoin.png',
        transactionName: 'Bitcoin',
        transactionId: '5bfa9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '+0.025',
        transactionValueUpDown: 'zl_transaction_pluse',
        transactionStatus: 'Completed',
        transactionStatusUpDown: 'zl_transaction_completed',
        transactionDate: '08/26/2018'
    },
    {
        id: 14,
        transactionType: 'assets/image/tableDash.svg',
        transactionName: 'Dash Parr',
        transactionId: '8ba9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '-5.23%',
        transactionValueUpDown: 'zl_transaction_pluse',
        transactionStatus: 'Completed',
        transactionStatusUpDown: 'zl_transaction_completed',
        transactionDate: '08/26/2018'
    },
    {
        id: 15,
        transactionType: 'assets/image/tableETH.png',
        transactionName: 'Ethereum',
        transactionId: '0fa9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '+0.025',
        transactionValueUpDown: 'zl_transaction_minas',
        transactionStatus: 'Failed',
        transactionStatusUpDown: 'zl_transaction_failed',
        transactionDate: '08/26/2018'
    },
    {
        id: 16,
        transactionType: 'assets/image/tableBitcoin.png',
        transactionName: 'Bitcoin',
        transactionId: '5bfa9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '+0.025',
        transactionValueUpDown: 'zl_transaction_pluse',
        transactionStatus: 'Completed',
        transactionStatusUpDown: 'zl_transaction_completed',
        transactionDate: '08/26/2018'
    },
    {
        id: 17,
        transactionType: 'assets/image/tableDash.svg',
        transactionName: 'Dash Parr',
        transactionId: '8ba9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '-5.23%',
        transactionValueUpDown: 'zl_transaction_pluse',
        transactionStatus: 'Completed',
        transactionStatusUpDown: 'zl_transaction_completed',
        transactionDate: '08/26/2018'
    },
    {
        id: 18,
        transactionType: 'assets/image/tableETH.png',
        transactionName: 'Ethereum',
        transactionId: '0fa9573d7bc89742a4b8ec5f1da0ed09475bfa9573d7bc8',
        transactionValue: '+0.025',
        transactionValueUpDown: 'zl_transaction_pluse',
        transactionStatus: 'Completed',
        transactionStatusUpDown: 'zl_transaction_completed',
        transactionDate: '08/26/2018'
    }
];

const AllTransactionListComponent = (props) => {
    // Transaction list
    const [transaction, setTransaction] = useState(transactionList);
    useEffect(() => {
        const regex = new RegExp(props.value, 'i');
        const filtered = transactionList.filter((item) => {
          return (item['transactionName'].search(regex)  > -1);
        });
        setTransaction(filtered); 
    },[props]);

    return (
        <>
            <div className="overflow-auto">
                <Table className="zl_transaction_list_table">
                    <thead>
                        <tr>
                            <th className="zl_transaction_list_table_heading">type</th>
                            <th className="zl_transaction_list_table_heading">name</th>
                            <th className="zl_transaction_list_table_heading">transaction id</th>
                            <th className="zl_transaction_list_table_heading">value</th>
                            <th className="zl_transaction_list_table_heading">status</th>
                            <th className="zl_transaction_list_table_heading">date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transaction.map((transactionListData, i) => (
                            <tr key={transactionListData.id}>
                                <td className="zl_transaction_list_type">
                                    <img src={transactionListData.transactionType} alt="transaction-icon" />
                                </td>
                                <td className="zl_transaction_list_name">{transactionListData.transactionName}</td>
                                <td className="zl_transaction_list_id">{transactionListData.transactionId}</td>
                                <td className={`${transactionListData.transactionValueUpDown} zl_transaction_list_value`}>{transactionListData.transactionValue}</td>
                                <td className={`${transactionListData.transactionStatusUpDown} zl_transaction_list_status`}>{transactionListData.transactionStatus}</td>
                                <td className="zl_transaction_list_date">{transactionListData.transactionDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default connect(null, null)(AllTransactionListComponent);
