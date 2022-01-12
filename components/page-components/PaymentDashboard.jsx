import PaymentReceipt from "./PaymentReceipt";
import CardSection from "./CardSection";
const PaymentDashboard = () =>{
    return(
        <div className="flex flex-col lg:flex-row">
            <CardSection/>
            <PaymentReceipt/>
        </div>
    )
}

export default PaymentDashboard;