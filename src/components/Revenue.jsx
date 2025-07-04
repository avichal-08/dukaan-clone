import { FaRegCircleQuestion } from "react-icons/fa6";
export function Revenue(){
    return(
        <div className="bg-sky-700 rounded-2xl h-36 ml-8 text-white">
            <div className="flex py-3 px-5"><p className="text-xl">Next Payout </p><span className="py-1.5 px-3"><FaRegCircleQuestion /></span></div>
            <div className="flex justify-between pb-5 px-5">
                <h1 className="text-3xl font-bold">₹2312.23</h1>
                <div><a href="" className="text-xl underline">23 orders</a>
                <span className="text-2xl">&gt;</span>
                </div>
            </div>
            <div className="flex justify-between bg-sky-800  py-3 px-5 rounded-2xl">
                <div>Next Payment Date:</div>
                <div>Today,4:00PM</div>
            </div>
        </div>
    )
}