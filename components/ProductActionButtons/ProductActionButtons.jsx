// Next
import Image from "next/image";

// NextUI Components
import { Button, Tooltip } from "@nextui-org/react";

// Component

// Styles
import s from "./ProductActionButtons.module.css";

// Hooks
import useInventory from "../../hooks/useInventory";

export function ProductActionButtons({ name, id }) {
  const { handleDeleteProduct } = useInventory();

  return (
    <>
      <Button.Group
        light
        css={{
          gap: "0.3rem",
        }}
      >
        <Tooltip content="Editar">
          <Button
            className={s.action__button}
            icon={
              <Image
                src="/icons/editar.svg"
                alt="Edit"
                width={20}
                height={20}
              />
            }
          />
        </Tooltip>
        <Tooltip content="Eliminar">
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
            onClick={() => handleDeleteProduct(name, id)}
          />
        </Tooltip>
      </Button.Group>
    </>
  );
}
