import { FaRegCircleQuestion } from "react-icons/fa6";
export function Processed(){
    return(
        <div className="rounded-2xl h-29 mx-5 bg-white">
            <div className="text-lg p-5 flex text-gray-600"><div>Amount Proceseed</div><div className="ml-[10px] mt-[5px]"><FaRegCircleQuestion/></div></div>
            <div className="pb-8 px-5">
               <h1 className="text-3xl font-medium">₹23,32,313.45</h1>
            </div>
        </div>    
    )
}