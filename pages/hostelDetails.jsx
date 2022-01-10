import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const percentage = 36;

const hostelDetails = () =>(
    <div className="text-black bg-yellow-300 p-3 rounded flex flex-col gap-y-8">
        <div className="flex justify-between items-center font-semibold">
            <h2 className="">Hostel Name</h2>
            <p>+27%</p>
        </div>
        <div className="flex justify-between items-center">
            <div className="flex flex-col ">
                <h3 className="text-4xl font-bold">1023</h3>
                <p className="font-light">Occupants</p>
            </div>
            <div className="flex justify-center items-center ">
                <div className="text-lg font-semibold w-16 h-16 flex justify-center items-center">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} styles={{text:{fontSize:"1.5rem"}}}/>
                </div>
            </div>
        </div>
    </div>
)


export default hostelDetails;