// Next
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

// Next UI Components
import { Avatar } from "@nextui-org/react";

// User Context
import { useAuth } from "../../Context/AuthContext";

// Styles
import s from "./UserSettings.module.css";

export function UserSettings() {
  const { user, logOut } = useAuth();

  const router = useRouter();

  const userMenuLinks = [
    {
      name: "Configuración",
      icon: "/icons/settings.svg",
      alt: "User",
      link: "/settings",
    },
  ];

  return (
    <div className={s.userSettings}>
      <div className={s.userSettings__userInfo}>
        <Avatar
          squared
          text={user.name}
          color="primary"
          textColor="white"
          size="md"
          className={s.sidebar__user}
        />
        <div className={s.userSettings__userDetails}>
          <h1 className={s.userSettings__title}>{user.name}</h1>
          <p className={s.userSettings__subTitle}> {user.email}</p>
        </div>
      </div>

      {userMenuLinks.map((link, index) => (
        <Link
          className={
            router.pathname === "/settings"
              ? `${s.userSettings__links} ${s.userSettings__links__active}`
              : `${s.userSettings__links}`
          }
          href={link.link}
          key={index}
        >
          <Image src={link.icon} alt={link.alt} width={20} height={20} />
          <h2 className={s.userSettings__link__item}>{link.name}</h2>
        </Link>
      ))}

      <div className={s.logOut} onClick={logOut}>
        <Image src="/icons/exit.svg" alt="Exit" width={20} height={20} />
        <h2 className={s.userSettings__link__item}> Cerrar Sesi&oacute;n </h2>
      </div>

      <p className={s.userSettings__version__text}>v1.0.0</p>
    </div>
  );
}
