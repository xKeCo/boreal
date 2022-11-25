// Link

// // Local Components
import { addDoc, collection } from "firebase/firestore";
import { useEffect } from "react";
import { Layout } from "../components";
import { db } from "../firebase/firebase";

// Hooks
import useInventory from "../hooks/useInventory";

// Home Styles
import s from "../styles/Home.module.css";

export default function Home() {
  const { numberOfProducts } = useInventory();

  // add products

  // const addProduct = () => {
  //   // add product to firestore

  //   const data = [
  //     {
  //       name: "ANESTESIA TOPICA ROXICAINA",
  //       category: "INSUMOS",
  //       stock: 0,
  //       price: 750,
  //     },
  //     {
  //       name: "PRUEVVA",
  //       category: "MATERIALES",
  //       stock: 2,
  //       price: 34829,
  //     },
  //     {
  //       name: "PRUEBA 30",
  //       category: "LABORATORIO",
  //       stock: 6,
  //       price: 840,
  //     },
  //     {
  //       name: "PRUEBAA",
  //       category: "INSUMOS",
  //       stock: 123,
  //       price: 4763,
  //     },
  //     {
  //       name: "PRUEBOTAA",
  //       category: "BOUTIQUE",
  //       stock: 7,
  //       price: 35562,
  //     },
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
      </Layout>
    </>
  );
}
