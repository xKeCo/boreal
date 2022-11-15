// Link

// // Local Components
import { SEO, Sidebar } from "../components";

// Home Styles
import s from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <SEO title="Inicio" />
      <div className={s.flex}>
        <Sidebar />
        <div className={s.container}>
          <h1>Inicio</h1>
        </div>
      </div>
    </>
  );
}
