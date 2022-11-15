// React

// Next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Styles
import s from "./Sidebar.module.css";

// Context
import { Avatar, Tooltip } from "@nextui-org/react";

// Local Components
import { UserSettings } from "/components";

// UserContext
import { useAuth } from "../../Context/AuthContext";

export function Sidebar() {
  const { user } = useAuth();

  // Router = Redirect
  const router = useRouter();

  // handle if sidebar is open or not
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
  ];

  return (
    <>
      <div className={s.sidebar}>
        <div>
          <div className={s.sidebar__logo__container}>
            <Image
              src="/logos/Logo.png"
              alt="Logo"
              width={50}
              height={50}
              className={s.sidebar__logo}
            />
          </div>

          <div className={s.sidebar__links__container}>
            <ul>
              {sideBarLinks.map((link, index) => (
                <Link href={link.link} key={index}>
                  <Tooltip
                    content={link.name}
                    shadow
                    color="invert"
                    placement="right"
                  >
                    <li
                      className={
                        router.pathname === link.link
                          ? `${s.sidebar__link} ${s.active}`
                          : `${s.sidebar__link}`
                      }
                    >
                      <Image
                        src={link.icon}
                        alt={link.name}
                        width={22}
                        height={22}
                      />
                    </li>
                  </Tooltip>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        {user && (
          <div className={s.sidebar__user__container}>
            <Tooltip
              placement="top"
              shadow
              // trigger="click"
              leaveDelay={200}
              offset={-35}
              css={{
                top: "955px",
                left: "225px",
                width: "280px",
                border: "1px solid #eaeaea",
                padding: "0.357rem 0",
              }}
              content={<UserSettings />}
            >
              <Avatar
                squared
                text={user.name}
                color="primary"
                textColor="white"
                size="md"
                className={s.sidebar__user}
              />
            </Tooltip>
          </div>
        )}
      </div>
    </>
  );
}
