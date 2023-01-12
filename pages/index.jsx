// Link

// // Local Components
// import { addDoc, collection } from "firebase/firestore";
// import { useEffect } from "react";
import { Layout } from "../components";
// import { db } from "../firebase/firebase";
import { useInventory } from "../hooks";

// Hooks

// Home Styles
import s from "../styles/Home.module.css";

export default function Home() {
  const { numberOfProducts } = useInventory();

  // add products

  // const addProduct = () => {
  //   // add product to firestore

  //   const data = [
  //
  //   ];

  //   data.forEach((product) => {
  //     addDoc(collection(db, "inventory"), product);
  //     console.log("agregado");
  //   });
  // };

  // useEffect(() => {
  //   addProduct();
  // }, []);

  return (
    <>
      <Layout title="Inicio">
        <h1>Inicio</h1>
        <h2>Productos en el inventario: {numberOfProducts}</h2>
      </Layout>
    </>
  );
}
