// React
import { useState } from "react";

// Next
import Image from "next/image";

// NextUI Components
import {
  Button,
  // Tooltip
} from "@nextui-org/react";

// Component
import { NewProductModal } from "../";

// Styles
import s from "./ProductActionButtons.module.css";

// Hooks
import { useInventory } from "../../hooks";

export function ProductActionButtons({ data }) {
  const { handleDeleteProduct } = useInventory();

  const [open, setOpen] = useState(false);
  const openModalHandler = () => setOpen(true);

  const [oneProductData, setOneProductData] = useState(null);

  return (
    <>
      <Button.Group
        light
        css={{
          gap: "0.3rem",
        }}
      >
        {/* <Tooltip content={`Editar ${name}`}> */}
        <Button
          className={s.action__button}
          icon={
            <Image src="/icons/editar.svg" alt="Edit" width={20} height={20} />
          }
          onClick={() => {
            setOneProductData(data);
            openModalHandler();
          }}
        />
        {/* </Tooltip> */}
        {/* <Tooltip content={`Eliminar ${name}`}> */}
        <Button
          className={`${s.action__button} ${s.action__button__delete}`}
          icon={
            <Image
              src="/icons/eliminar.svg"
              alt="Edit"
              width={20}
              height={20}
            />
          }
          onClick={() => handleDeleteProduct(data.name, data.id)}
        />
        {/* </Tooltip> */}
      </Button.Group>

      <NewProductModal
        open={open}
        setOpen={setOpen}
        oneProductData={oneProductData}
        setOneProductData={setOneProductData}
      />
    </>
  );
}
