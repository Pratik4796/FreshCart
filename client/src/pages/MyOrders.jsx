import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { axios, user } = useContext(AppContext);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/user");
      console.log("data", data);
      if (data.success) {
        setOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="mt-6 pb-16">
      <div>
        <p className="text-2xl font-medium md:text-3xl">My Orders</p>
      </div>

      {orders.map((order, index) => (
        <div
          key={index}
          className="my-8 border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
        >
          <p className="flex justify-between items-center gap-6">
            <span>Order ID:{order._id}</span>
            <span>Payment:{order.paymentType}</span>
            <span>TotalAmount:₹{order.amount}</span>
          </p>

          {order.items.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white text-gray-800
    ${order.items.length !== index + 1 && "border-b"}
    border-gray-300 flex flex-col md:flex-row md:items-center
    justify-between p-4 py-5 w-full max-w-4xl`}
            >
              <div className="flex items-center mb-4 md:mb-0">
                <div className="p-4 rounded-lg">
                  <img
                    src={
                      item.product?.image?.[0]
                        ? `http://localhost:8000/images/${item.product.image[0]}`
                        : "https://via.placeholder.com/100"
                    }
                    alt=""
                    className="w-16 h-16"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-medium">
                    {item.product?.name || "Product not available"}
                  </h2>
                  <p>{item.product?.category || "-"}</p>
                </div>
              </div>

              <div className="text-lg font-medium">
                <p>Quantity: {item.quantity || "1"}</p>
                <p>Status: {order.status}</p>
                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>

              <p className="text-lg">
                Amount:₹
                {(item.product?.offerPrice || 0) * (item.quantity || 1)}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;