import type { ReactElement } from "react";
import AdminSideBar from "../components/AdminSidebar";
import type { Column } from "react-table";
import { useCallback, useState } from "react";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr: DataType[] = [
  {
    avatar: <img style={{ borderRadius: "50%" }} src={img} alt="Shoes" />,

    name: "Nidhi Yadav",
    email: "nidhi.yadav@example.com",
    gender: "Female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img style={{ borderRadius: "50%" }} src={img2} alt="Shoes" />,

    name: "Shreya Sharma",
    email: "shreya.sharma@example.com",
    gender: "Female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Custombers = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(() => {
    return TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Custombers",
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

export default Custombers;
