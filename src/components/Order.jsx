import { Orderid } from "./Orderid"
import { Table } from "./Table"
export function Order(){
    return(
        <div className="ml-8 mt-7 mr-5 bg-white">
            <Orderid/>
            <Table/>
        </div>
    )
}