import UserComponent from "../UserComponent"
import { ArrowLeft,Calender } from "../SVGIcons";
const HostelRevenue = () => {
    return(
        <div>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-between gap-x-4">
                    <p className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-Default"><ArrowLeft/></p>
                    <h3 className="text-primary-Default text-sm">Hostel Name</h3>
                </div>
                <div>
                    <UserComponent/>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <div className="p-4 w-3/5 bg-white rounded-xl flex items-center justify-between">
                    <h5 className="">Hostel Revenue</h5>
                    <div className="border-2 flex items-center justify-between p-2 rounded-xl gap-x-2">
                        <Calender/>
                        <select className="body2 text-Neutral-gray">
                            <option className="body2" value='year'>Year</option>
                            <option className="body2" value="2021">2021</option>
                            <option className="body2" value="2020">2020</option>
                            <option className="body2" value="2019">2019</option>
                            <option className="body2" value="2018">2018</option>
                        </select>
                    </div>
                </div>
                <div className="w-2/6 bg-white px-2 py-4 rounded-xl">

                </div>
            </div>
        </div>
    )
}

export default HostelRevenue;