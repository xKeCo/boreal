// React
import { useEffect, useState } from "react";

// NextUI Components
import { Button, Input, Modal } from "@nextui-org/react";

// Styles
import s from "./NewProductModal.module.css";

// Firestore
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

// React hot toast (notifications)
import { toast } from "react-hot-toast";

// Hooks
import { useInventory, useWindowDimensions } from "../../hooks";

export function NewProductModal({
  open,
  setOpen,
  oneProductData,
  setOneProductData,
}) {
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

  useEffect(() => {
    if (oneProductData) {
      setProductData(oneProductData);
    }
  }, [oneProductData]);

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
      if (oneProductData === null) {
        await addDoc(collection(db, "inventory"), productData);
        setLoading(false);
        toast.success("Producto agregado con éxito");
        // Close modal
        closeHandler();
      } else {
        // Update data
        await updateDoc(doc(db, "inventory", oneProductData.id), {
          name: productData.name,
          stock: productData.stock,
          category: productData.category,
          price: productData.price,
        });
        setLoading(false);
        toast.success("Producto actualizado con éxito");
        // Close modal
        closeHandler();
        setOneProductData(null);
      }
      setProductData({
        name: "",
        category: "",
        stock: 0,
        price: 0,
      });
    } catch (error) {
      setError(true);
      console.log(error);
      toast.error(
        "Ocurrió un error al subir la informacion, intenta de nuevo."
      );
    }
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
              name="name"
              required
              aria-label="Nombre del producto"
              placeholder="Nombre del producto"
              initialValue={oneProductData?.name}
              onChange={handleOnInputChange}
            />
            <Input
              bordered
              fullWidth
              labelRight="Unidades"
              type="number"
              name="stock"
              step="0.1"
              required
              aria-label="Cantidad actual"
              placeholder="Cantidad actual"
              initialValue={oneProductData?.stock}
              onChange={handleOnInputChange}
            />
            <Input
              bordered
              fullWidth
              labelRight="COP"
              labelLeft="$"
              name="price"
              type="number"
              required
              aria-label="Precio"
              placeholder="Precio"
              initialValue={oneProductData?.price}
              onChange={handleOnInputChange}
            />
            <Input
              clearable
              bordered
              fullWidth
              name="category"
              required
              aria-label="Categoria"
              placeholder="Categoria"
              initialValue={oneProductData?.category}
              onChange={handleOnInputChange}
            />

            {error && <p>Ha ocurrido un error, intentalo de nuevo.</p>}
          </Modal.Body>

          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Cancelar
            </Button>
            <Button
              auto
              type="submit"
              disabled={
                productData.name === oneProductData?.name &&
                productData.price === oneProductData?.price &&
                productData.stock === oneProductData?.stock &&
                productData.category === oneProductData?.category
              }
            >
              {loading ? "Agregando..." : "Agregar producto"}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}
