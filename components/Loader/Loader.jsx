// NextUI Component
import { Loading } from "@nextui-org/react";

// Styles
import s from "./Loader.module.css";

export function Loader() {
  return (
    <div className={s.loader}>
      <Loading
        size="xl"
        loadingCss={{
          $$loadingSize: "80px",
          $$loadingBorder: "8px",
          $$loadingColor: "#2db97c",
        }}
        color="success"
      />
    </div>
  );
}
