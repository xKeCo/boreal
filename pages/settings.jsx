// React

// Next

// Local Components
import { SEO, Sidebar } from "../components";

// Styles
import s from "../styles/Settings.module.css";

function Settings() {
  return (
    <>
      <SEO title="Configuraci&oacute;n" />
      <div className={s.flex}>
        <Sidebar />
        <div className={s.container}>
          <h1>Configuraci&oacute;n</h1>
        </div>
      </div>
    </>
  );
}

export default Settings;
