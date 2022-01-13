const PaymentReceipt = () =>{
    const receipts = [
        {
            date:"March, 01, 2020",
            receiptNO:"REF: 1550104068761107-1-3",
            amount:"$180"
        },
        {
            date:"March, 01, 2020",
            receiptNO:"REF: 1550104068761107-1-3",
            amount:"$180"
        },
        {
            date:"March, 01, 2020",
            receiptNO:"REF: 1550104068761107-1-3",
            amount:"$180"
        },
        {
            date:"March, 01, 2020",
            receiptNO:"REF: 1550104068761107-1-3",
            amount:"$180"
        },
        {
            date:"March, 01, 2020",
            receiptNO:"REF: 1550104068761107-1-3",
            amount:"$180"
        },
        {
            date:"March, 01, 2020",
            receiptNO:"REF: 1550104068761107-1-3",
            amount:"$180"
        }
    ]
    return(
        <div className="w-full md:w-[49%] bg-white rounded-xl px-4 lg:px-4">
            <p className="subtitle1 text-Neutral-black py-4">Receipts</p>
            {
                receipts.map(receipt=>(
                    <div className="flex justify-between items-center mb-4 py-4 px-2 rounded-lg bg-primary-Lightest">
                        <div>
                            <p className="subtitle2 text-gray-700">{receipt.date}</p>
                            <p className="small2 text-gray-400">{receipt.receiptNO}</p>
                        </div>
                        <div className="flex justify-between items-center gap-x-4 lg:gap-x-6">
                            <p className="small2 text-gray-400">{receipt.amount}</p>
                            <a className="small3 text-primary-Default" href="">VIEW</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PaymentReceipt