const hostelDetails = () =>(
    <div className="text-black bg-yellow-300 p-3 rounded flex flex-col gap-y-8">
        <div className="flex justify-between items-center">
            <h2 className="font-semibold">Hostel Name</h2>
            <p>+27%</p>
        </div>
        <div className="flex justify-between items-center">
            <div className="flex flex-col ">
                <h3 className="text-4xl font-bold">1023</h3>
                <p className="font-light">Occupants</p>
            </div>
            <div className="flex justify-center items-center ">
                <div className="text-xl font-semibold border-2 rounded-full w-16 h-16 border-indigo-400  flex justify-center items-center">
                    <p>36%</p>
                </div>
            </div>
        </div>
    </div>
)


export default hostelDetails;