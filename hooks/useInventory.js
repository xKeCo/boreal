// React
import { useEffect, useState } from "react";

// Firebase imports
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

// DB Firestore
import { db } from "../firebase/firebase";
import { toast } from "react-hot-toast";

export const useInventory = () => {
  // Data state
  const [inventory, setInventory] = useState([]);

  // loader
  const [loadingInventory, setLoadingInventory] = useState(true);

  // errorInventory
  const [errorInventory, setErrorInventory] = useState(null);

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

      onSnapshot(queryInventory, (querySnapshot) => {
        const docs = querySnapshot.docs.map((docs) => ({
          id: docs.id,
          totalPrice: docs.data().stock * docs.data().price,
          ...docs.data(),
        }));
        setInventory(docs);
        setNumberOfProducts(docs.length);
        setLoadingInventory(false);
      });
    } catch (errorInventory) {
      console.log(errorInventory);
      setErrorInventory(errorInventory);
      setLoadingInventory(false);
    }
  };

  // Handle Delete Product
  const handleDeleteProduct = async (name, id) => {
    try {
      await deleteDoc(doc(db, "inventory", id));
      toast.success(`Producto eliminado ${name}`);
      getInventoryData();
      setLoadingInventory(false);
    } catch (errorInventory) {
      console.log(errorInventory);
      setLoadingInventory(false);
    }
  };

  useEffect(() => {
    getInventoryData();
  }, []);

  return {
    inventory,
    loadingInventory,
    setLoadingInventory,
    errorInventory,
    setErrorInventory,
    handleDeleteProduct,
    numberOfProducts,
    getInventoryData,
  };
};
