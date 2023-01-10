// React
import { useState } from "react";

// Next

// Local Components
import {
  Layout,
  MiniLoader,
  NewProductModal,
  ProductCard,
  TableComponent,
} from "../components";

// NextUI Components
import { Button, Input } from "@nextui-org/react";

// Styles
import s from "../styles/Productos.module.css";

// Hooks
import { useInventory, useSearch, useWindowDimensions } from "../hooks";

function Productos() {
  // Modal state
  const [open, setOpen] = useState(false);

  const openModalHandler = () => setOpen(true);

  const { width } = useWindowDimensions();

  const { inventory, loadingInventory, errorInventory } = useInventory();
  const { searchText, searchResult, handleInputSearchChange } = useSearch();

  const columns = [
    // {
    //   key: "id",
    //   label: "ID",
    // },
    {
      key: "name",
      label: "NOMBRE",
    },
    {
      key: "stock",
      label: "CANTIDAD",
    },
    {
      key: "price",
      label: "PRECIO",
    },
    {
      key: "totalPrice",
      label: "TOTAL",
    },
    {
      key: "category",
      label: "CATEGORIA",
    },
    {
      key: "manejo",
      label: "MANEJO",
    },
  ];

  return (
    <>
      <Layout title="Productos">
        <div className={s.products}>
          <h1 className={s.products__title}>Productos</h1>
          <div className={s.products__header}>
            <Input
              placeholder="Buscar en el inventario"
              aria-label="Buscar en el inventario"
              name="search"
              fullWidth
              onChange={(e) => {
                handleInputSearchChange(e, inventory);
              }}
              className={s.products__search}
            />

            <Button
              className={s.products__addButton}
              onClick={openModalHandler}
            >
              Agregar Producto
            </Button>
          </div>

          {loadingInventory ? (
            <MiniLoader />
          ) : errorInventory ? (
            <h3 className={s.error}>
              Ocurrio un error al traer los datos. Mandele un wpp a Kevin
            </h3>
          ) : (
            <>
              {width < 750 ? (
                <>
                  {searchText && searchResult.length === 0 ? (
                    <h3 className={s.noResultText}>
                      No se encontraron resultados para: {searchText}
                    </h3>
                  ) : searchResult.length > 0 ? (
                    searchResult.map((product) => (
                      <ProductCard key={product.id} data={product} />
                    ))
                  ) : (
                    inventory.map((product) => (
                      <ProductCard key={product.id} data={product} />
                    ))
                  )}
                </>
              ) : (
                <>
                  {searchText && searchResult.length === 0 ? (
                    <h3 className={s.noResultText}>
                      No se encontraron resultados para: {searchText}
                    </h3>
                  ) : (
                    <TableComponent
                      title="Productos"
                      columns={columns}
                      data={inventory}
                      loading={loadingInventory}
                      searchResult={searchResult}
                    />
                  )}
                </>
              )}
            </>
          )}
        </div>
      </Layout>
      <NewProductModal open={open} setOpen={setOpen} oneProductData={null} />
    </>
  );
}

export default Productos;
