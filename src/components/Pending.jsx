import { FaRegCircleQuestion } from "react-icons/fa6";
export function Pending(){
    return(
        <div className="rounded-2xl h-29 ml-5 bg-white">
            <div className="text-lg text-gray-600 p-5 flex"><div>Amount Pending</div><div className="ml-[10px] mt-[5px]"><FaRegCircleQuestion/></div></div>
            <div className="flex justify-between pb-10 px-5">
                <h1 className="text-3xl font-medium">₹92,313.45</h1>
                <div className="text-blue-500"><a href="" className="text-xl underline">13 orders</a>
                <span className="text-3xl">&gt;</span>
                </div>
            </div>
        </div>    
    )
}