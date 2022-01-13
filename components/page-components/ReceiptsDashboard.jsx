import PaymentReceipt from "../PaymentReceipt";
import CardSection from "../CardSection";
const PaymentDashboard = () =>{
    return(
        <div className="flex flex-col md:justify-between md:items-center md:flex-row">
            <CardSection/>
            <PaymentReceipt/>
        </div>
    )
}

export default PaymentDashboard;