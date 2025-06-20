import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Custombers = lazy(() => import("./pages/Custombers"));

import NewProduct from "./pages/Management/NewProduct";
import ProductManagement from "./pages/Management/ProductManagement";
import TransactionManagement from "./pages/Management/TransactionManagement";

import BarCharts from "./pages/Charts/BarCharts";
import LineCharts from "./pages/Charts/LineCharts";
import PieCharts from "./pages/Charts/PieCharts";

import Coupon from "./pages/apps/Coupon";
import StopWatch from "./pages/apps/StopWatch";
import Toss from "./pages/apps/Toss";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={ <Link to= "/admin/dashboard"><button>Visit Dashboard</button></Link>} />

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path="/admin/custombers" element={<Custombers />} />

          {/* {Charts} */}

          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />

          {/* {Apps} */}

          <Route path="/admin/app/stopwatch" element={<StopWatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/toss" element={<Toss />} />

          {/* {Management} */}
          <Route path="/admin/product/new" element={<NewProduct />} />

          <Route path="/admin/product/:id" element={<ProductManagement />} />

          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
