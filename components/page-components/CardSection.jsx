
import { CircleIntersect,Edit,MasterCardCircle } from "../SVGIcons";

const CardSection = () => {
    return(
        <div className="flex w-full lg:w-1/2 px-4">
            <div className="w-full">
                <h3 className="text-primary-Default">Settings</h3>
                <div className="lg:w-11/12 py-4 my-6 px-5 flex flex-col text-white gap-y-16 bg-primary-Default rounded-xl relative ">
                    <div className="flex items-center justify-between">
                        <p className="subtitle1">Hostel UI</p>
                        <div>
                            <CircleIntersect/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <p className="font-normal text-xl">7812 2139 0823 XXXX</p>
                        <div className="flex gap-x-4">
                            <div>
                                <p className="text-xs">VALID THRU</p>
                                <p className="">05/24</p>
                            </div>
                            <div>
                                <p className="text-xs">CVV</p>
                                <p>09X</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-5 bg-white rounded-lg">
                    <div>
                        <div className="flex justify-between items-center py-4">
                            <h5 className="text-Neutral-black">Payment Method</h5>
                            <button className="bg-primary-Default text-white
                            py-2 px-4 rounded-lg">Add New Card</button>
                        </div>
                        <form className="flex flex-col gap-y-5">
                            <label className="body2 flex flex-col gap-y-3">
                                Card Name
                                <div className="w-full border-2 flex items-center rounded-lg outline-0 bg-white">
                                    <input className="p-2 rounded-lg outline-0 w-w-9/10" type="text" placeholder="Cedric Weiman"/>
                                    <Edit/>
                                </div>
                            </label>
                            <label className="body2 flex flex-col gap-y-3">
                                Card Number
                                <div className="w-full border-2 flex items-center rounded-lg outline-0 bg-white pl-2">
                                    <div className="flex items-center justify-between w-w-9/10">
                                        <MasterCardCircle/>
                                        <input className="p-2 rounded-lg outline-0 w-w-9/10" type="number" placeholder="7812 2139 0823"/>
                                    </div>
                                    <Edit/>
                                </div>
                            </label>
                            <div className="flex justify-between items-center">
                                <label className="body2 w-w-4/10 flex flex-col gap-y-3">
                                    MM/YY
                                    <div className="w-full border-2 flex items-center rounded-lg outline-0 bg-white pr-3">
                                        <input className="p-2 rounded-lg outline-0 w-w-9/10"  type="number" placeholder="MM/YY"/>
                                        <Edit/>
                                    </div>
                                </label>
                                <label className="body2 w-w-4/10 flex flex-col gap-y-3">
                                    CVV
                                    <div className="w-full border-2 flex items-center rounded-lg outline-0 bg-white pr-3">
                                        <input className="p-2 rounded-lg outline-0 w-w-9/10"  type="number" placeholder="XXX"/>
                                        <Edit/>
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSection;