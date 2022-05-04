import { useEffect, useState } from "react";
import { IOrder } from "../../Interfaces";
import { Main } from "../../Components";
import { getAllOrders } from "../../Services/OrderServices";
import { Wrapper } from "../../Components/Utility";

const AdminPanel: React.FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([] as IOrder[]);

  useEffect(() => {
    (async () => {
      const fetchedOrders = await getAllOrders();
      setOrders(fetchedOrders);
    })();
  }, []);
  console.log(orders);
  return (
    <Main>
      <Wrapper>
        {orders.map((item) => (
          <div style={{ display: "flex" }}>
            <p>Order: {item._id}</p>
            <p>Amount: £{item.amount}</p>
            <p>Packed: {item.orderStatus.packed.toString()}</p>
            <p>Dispatched: {item.orderStatus.dispatched.toString()}</p>
            <button>Edit order</button>
          </div>
        ))}
      </Wrapper>
    </Main>
  );
};

export default AdminPanel;
