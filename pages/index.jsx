// Link

// // Local Components
import { Layout } from "../components";

// Hooks
import useInventory from "../hooks/useInventory";

// Home Styles
import s from "../styles/Home.module.css";

export default function Home() {
  const { numberOfProducts } = useInventory();

  return (
    <>
      <Layout title="Inicio">
        <h1>Inicio</h1>
      </Layout>
    </>
  );
}
