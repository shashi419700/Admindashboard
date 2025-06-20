import { useCallback, useState, type ReactElement } from "react";
import AdminSideBar from "../components/AdminSidebar";
import type { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";


interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr : DataType[]=[
  {
    user: "Shashi Kumar",
    amount: 1500,
    discount: 100,
    quantity: 2,
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transaction/shashi"}>Manager</Link>
  },
   {
    user: "Aditya Kumar",
    amount: 1500,
    discount: 100,
    quantity: 2,
    status: <span className="green">Shipped</span>,
    action: <Link to={"/admin/transaction/shashi"}>Manager</Link>
  }, {
    user: "Anjali Kumari",
    amount: 1500,
    discount: 100,
    quantity: 2,
    status: <span className="purple">Delivered</span>,
    action: <Link to={"/admin/transaction/shashi"}>Manager</Link>
  },
]
const Transaction = () => {

    const [data] = useState<DataType[]>(arr);

  const Table = useCallback(() => {
    return TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transactions",
      true
    )();
  }, []);

  
  return (
    <div className="admin-container">
      <AdminSideBar />
      <main>{Table()}</main>
    </div>
  );
};

export default Transaction;
