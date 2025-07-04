import { GoHome } from "react-icons/go";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { BsCashCoin } from "react-icons/bs";
import { IoAnalyticsOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { ImSmile } from "react-icons/im";
import { MdOutlineColorLens } from "react-icons/md";
import { BsPlugin } from "react-icons/bs";
export function Options(){
    return(
        <div className="mt-6">
            <div className="flex cursor-pointer hover:bg-gray-700  text-lg mt-2 ml-3 pl-3 mr-2 rounded-1xl"><div className="text-white mt-1 mr-2"><GoHome size={23} /></div><div className="text-gray-400 text-[17px] font-medium">Home</div></div>
            <div className="flex cursor-pointer hover:bg-gray-700 text-lg mt-2 ml-3 pl-3 mr-2 rounded-1xl"><div className="text-white mt-1 mr-2"><TbReportAnalytics size={23} /></div><div className="text-gray-400 text-[17px] font-medium">Orders</div></div>
            <div className="flex cursor-pointer hover:bg-gray-700 text-lg mt-2 ml-3 pl-3 mr-2 rounded-1xl"><div className="text-white mr-2"><AiOutlineProduct size={22} /></div><div className="text-gray-400 font-medium text-[17px]">Products</div></div>
            <div className="flex cursor-pointer hover:bg-gray-700 text-lg mt-2 ml-3 pl-3 mr-2 rounded-1xl"><div className="text-white mr-2"><CiDeliveryTruck size={23} /></div><div className="text-gray-400 font-medium text-[17px]">Delivery</div></div>
            <div className="flex cursor-pointer hover:bg-gray-700 text-lg mt-2 ml-3 pl-3 mr-2 rounded-1xl"><div className="text-white mr-2"><CiBullhorn size={23} /></div><div className="text-gray-400 font-medium text-[17px]">Marketing</div></div>
            <div className="flex cursor-pointer hover:bg-gray-700 text-lg mt-2 ml-3 pl-3 mr-2 rounded-1xl"><div className="text-white mr-2"><IoAnalyticsOutline size={23} /></div><div className="text-gray-400 font-medium text-[17px]">Analytics</div></div>
            <div className="flex cursor-pointer hover:bg-gray-700 bg-gray-700 text-lg mt-2 ml-3 pl-3 mr-2 rounded-1xl"><div className="text-white mt-1 mr-2"><BsCashCoin  size={20} /></div><div className="text-gray-400 font-medium text-[17px]">Payout</div></div>
            <div className="flex cursor-pointer hover:bg-gray-700 text-lg mt-2 ml-3 pl-3 mr-2 rounded-1xl"><div className="text-white mr-2"><CiDiscount1  size={23} /></div><div className="text-gray-400 font-medium text-[17px]">Discount</div></div>
            <div className="flex cursor-pointer hover:bg-gray-700 text-lg mt-2 ml-3 pl-3 mr-2 rounded-1xl"><div className="text-white mr-2"><ImSmile size={20} /></div><div className="text-gray-400 font-medium text-[17px]">Audience</div></div>
            <div className="flex cursor-pointer hover:bg-gray-700 text-lg mt-2 ml-3 pl-3 mr-2 rounded-1xl"><div className="text-white mr-2"><MdOutlineColorLens size={23} /></div><div className="text-gray-400 font-medium text-[17px]">Appearnace</div></div>
            <div className="flex cursor-pointer hover:bg-gray-700 text-lg mt-2 ml-3 pl-3 mr-2 rounded-1xl"><div className="text-white mr-2"><BsPlugin size={20} /></div><div className="text-gray-400 font-medium text-[17px]">Plugins</div></div>
        </div>
    )
}