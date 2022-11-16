// Local Components
import { Sidebar, Nav, SEO } from "/components";

// Styles
import s from "./Layout.module.css";

export function Layout({ children, title }) {
  return (
    <div>
      <SEO title={title} />
      <div className={s.flex}>
        <Sidebar />
        <div className={s.container}>
          <Nav />
          {children}
        </div>
      </div>
    </div>
  );
}
