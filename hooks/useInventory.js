// React
import { useEffect, useState } from "react";

// Firebase imports
import { collection, getDocs, orderBy, query } from "firebase/firestore";

// DB Firestore
import { db } from "../firebase/firebase";

const useInventory = () => {
  // Data state
  const [inventory, setInventory] = useState([]);

  // loader
  const [loading, setLoading] = useState(true);

  // error
  const [error, setError] = useState(null);

  // number of items
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  const getInventoryData = async () => {
    try {
      const docsRef = collection(db, "inventory");
      const queryInventory = query(
        docsRef,
        orderBy("category", "desc"),
        orderBy("name", "asc")
      );
      const Inventory = await getDocs(queryInventory);
      const docs = Inventory.docs.map((doc) => ({
        id: doc.id,
        totalPrice: doc.data().stock * doc.data().price,
        ...doc.data(),
      }));

      setNumberOfProducts(docs.length);
      setInventory(docs);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getInventoryData();
  }, []);

  return {
    inventory,
    loading,
    error,
    numberOfProducts,
    getInventoryData,
  };
};

export default useInventory;
