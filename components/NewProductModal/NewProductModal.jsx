// React
import { useState } from "react";
// NextUI Components
import { Button, Input, Modal } from "@nextui-org/react";

// Styles
import s from "./NewProductModal.module.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { toast } from "react-hot-toast";
import { useInventory, useWindowDimensions } from "../../hooks";

export function NewProductModal({ open, setOpen }) {
  const closeHandler = () => {
    setOpen(false);
  };

  // Get Product data function
  const { getInventoryData } = useInventory();
  // Get window dimensions
  const { width } = useWindowDimensions();

  const [productData, setProductData] = useState({
    name: "",
    category: "",
    stock: 0,
    price: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleOnInputChange = (e) => {
    const { name, value } = e.target;

    setProductData({
      ...productData,
      [name]: value.toUpperCase(),
    });
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    // Add data to firestore
    setLoading(true);

    try {
      await addDoc(collection(db, "inventory"), productData);
      setLoading(false);
      getInventoryData();
      // Close modal
      closeHandler();
      toast.success("Producto agregado con éxito");
    } catch (error) {
      setError(true);
      console.log(error);
      toast.error(
        "Ocurrió un error al subir la informacion, intenta de nuevo."
      );
    }

    setProductData({
      name: "",
      category: "",
      stock: 0,
      price: 0,
    });
  };

  return (
    <div>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={open}
        onClose={closeHandler}
        className={s.modal}
        fullScreen={width < 550 ? true : false}
      >
        <Modal.Header>
          <h1 className={s.modal__title}>A&ntilde;adir nuevo producto</h1>
        </Modal.Header>
        <form onSubmit={handleSubmitProduct}>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              size="lg"
              name="name"
              required
              aria-label="Nombre del producto"
              placeholder="Nombre del producto"
              onChange={handleOnInputChange}
            />
            <Input
              bordered
              fullWidth
              size="lg"
              type="number"
              name="stock"
              required
              aria-label="Cantidad actual"
              placeholder="Cantidad actual"
              onChange={handleOnInputChange}
            />
            <Input
              bordered
              fullWidth
              labelRight="COP"
              labelLeft="$"
              size="lg"
              name="price"
              type="number"
              required
              aria-label="Precio"
              placeholder="Precio"
              onChange={handleOnInputChange}
            />
            <Input
              clearable
              bordered
              fullWidth
              size="lg"
              name="category"
              required
              aria-label="Categoria"
              placeholder="Categoria"
              onChange={handleOnInputChange}
            />

            {error && <p>Ha ocurrido un error, intentalo de nuevo.</p>}
          </Modal.Body>

          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Cancelar
            </Button>
            <Button auto type="submit">
              {loading ? "Agregando..." : "Agregar producto"}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}
