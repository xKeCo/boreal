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

export function MiniLoader() {
  return (
    <div className={s.miniLoader}>
      <Loading
        size="md"
        type="points"
        loadingCss={{
          $$loadingSize: "20px",
          $$loadingColor: "#2db97c",
        }}
        color="success"
      />
    </div>
  );
}
