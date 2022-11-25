// NextUI Components
import { Button, Input, Modal } from "@nextui-org/react";

// Styles
import s from "./NewProductModal.module.css";

export function NewProductModal({ open, setOpen }) {
  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={open}
        onClose={closeHandler}
      >
        <Modal.Header>
          <h1 className={s.modal__title}>A&ntilde;adir nuevo producto</h1>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Nombre del producto"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
