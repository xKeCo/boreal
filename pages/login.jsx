// React Imports
import { useState } from "react";

// Next Imports
import Image from "next/image";
import { useRouter } from "next/router";

// Local Components
import { SEO } from "../components";

// NextUI Components
import { Button, Input } from "@nextui-org/react";

// User Context
import { useAuth } from "../Context/AuthContext";

// Styles
import s from "../styles/Login.module.css";

// React Hot Toast Notifications
import { toast } from "react-hot-toast";

function Login() {
  // User Context Data
  const { user, logIn } = useAuth();

  // Loading State
  const [loading, setLoading] = useState(false);

  // Next Router
  const router = useRouter();

  // Form Data
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  // Handle Form Data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setcredentials({
      ...credentials,
      [name]: value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await logIn(`${credentials.email}@gmail.com`, credentials.password);
      setLoading(false);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("El usuario no existe");
        setLoading(false);
      } else if (error.code === "auth/wrong-password") {
        toast.error("La contraseña es incorrecta");
        setLoading(false);
      } else if (error.code === "auth/invalid-email") {
        toast.error("Email inválido");
        setLoading(false);
      }
    }
  };

  // Redirect if user is logged in
  if (user) {
    router.push("/");
  }

  return (
    <>
      <SEO title="Login" />

      <form className={s.login} onSubmit={handleSubmit}>
        <Image
          src="/logos/Logo.svg"
          alt="Logo"
          className={s.logo}
          width={250}
          height={250}
          priority
        />
        <Input
          label="Usuario"
          variant="outlined"
          name="email"
          className={s.login__input}
          defaultValue={credentials.email}
          fullWidth
          required
          onChange={handleInputChange}
          size="lg"
        />
        <Input.Password
          label="Contraseña"
          name="password"
          className={s.login__input}
          defaultValue={credentials.password}
          fullWidth
          required
          onChange={handleInputChange}
          size="lg"
        />
        <Button className={s.login__button} type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Iniciar Sesión"}
        </Button>
      </form>
    </>
  );
}

export default Login;
