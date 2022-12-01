// Next UI Components
import { Collapse } from "@nextui-org/react";

// Components
import { ProductActionButtons } from "../";

// Styles
import s from "./ProductCard.module.css";

export function ProductCard({ data }) {
  return (
    <Collapse
      title={data.name}
      subtitle={`Cantidad: ${data.stock}`}
      bordered
      css={{
        margin: "0.3rem 0",
      }}
      className={s.card}
    >
      <div className={s.card__info}>
        <div className={s.card__details}>
          <p className={s.card__product__text}>{data.category}</p>
          <p className={s.card__product__text}>Precio: ${data.price}</p>
          <p className={s.card__product__text}>Total: ${data.totalPrice}</p>
        </div>
        <div className={s.card__action__buttons}>
          <ProductActionButtons data={data} />
        </div>
      </div>
    </Collapse>
  );
}
