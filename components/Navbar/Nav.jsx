// Next UI Components
import { Navbar, Avatar, Tooltip } from "@nextui-org/react";

// Next
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { UserSettings } from "/components";

// Styles
import s from "./Navbar.module.css";

// User Context
import { useAuth } from "../../Context/AuthContext";

export function Nav() {
  // User Context
  const { user } = useAuth();

  // Router
  const router = useRouter();

  // Sidebar Links
  const sideBarLinks = [
    {
      name: "Inicio",
      icon: "/icons/home.svg",
      alt: "Home",
      link: "/",
    },
    {
      name: "Productos",
      icon: "/icons/productos.svg",
      alt: "Products",
      link: "/productos",
    },
    {
      name: "Reportes",
      icon: "/icons/reportes.svg",
      alt: "Reports",
      link: "/s",
    },
    {
      name: "Configuración",
      icon: "/icons/settings.svg",
      alt: "Settings",
      link: "/settings",
    },
  ];

  return (
    <Navbar isBordered variant="sticky" className={s.navbar}>
      <Navbar.Toggle />
      <Navbar.Brand>
        <Image src="/logos/Logo.png" alt="Logo" width={50} height={50} />
      </Navbar.Brand>
      <Navbar.Content>
        <div className={s.sidebar__user__container}>
          <Tooltip
            placement="bottomEnd"
            shadow
            trigger="click"
            offset={25}
            content={<UserSettings />}
          >
            <Avatar
              squared
              text={user?.name}
              color="primary"
              textColor="white"
              size="md"
              className={s.sidebar__user}
            />
          </Tooltip>
        </div>
      </Navbar.Content>
      <Navbar.Collapse css={{ bgColor: "white" }}>
        {sideBarLinks.map((link, index) => (
          <Navbar.CollapseItem key={index} activeColor="secondary">
            <Link
              href={link.link}
              className={
                router.pathname === link.link
                  ? `${s.sidebar__link} ${s.active}`
                  : `${s.sidebar__link}`
              }
            >
              <Image src={link.icon} alt={link.alt} width={20} height={20} />
              {link.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
