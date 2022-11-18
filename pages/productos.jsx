// React
import { useState } from "react";

// Next

// Local Components
import { Layout, MiniLoader } from "../components";

// NextUI Components
import { Input, Table } from "@nextui-org/react";

// Styles
import s from "../styles/Productos.module.css";

// Hooks
import useInventory from "../hooks/useInventory";

function Productos() {
  const { inventory, loading, error } = useInventory();
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");

  const columns = [
    {
      key: "id",
      label: "ID",
    },
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
      label: "TOTAL $",
    },
    {
      key: "category",
      label: "CATEGORIA",
    },
  ];

  const handleInputChange = (e) => {
    const texto = e.target.value;
    const search = inventory.filter((project) => {
      return `${project.name} ${project.category}`
        .toLowerCase()
        .includes(texto.toLowerCase());
    });

    setSearchText(texto);
    setSearchResult(search);
  };

  return (
    <>
      <Layout title="Productos">
        <h1>Productos</h1>

        <Input
          placeholder="Buscar en el inventario"
          aria-label="Buscar en el inventario"
          name="search"
          fullWidth
          onChange={handleInputChange}
        />
        {loading ? (
          <MiniLoader />
        ) : error ? (
          <h3 className={s.error}>
            Ocurrio un error al traer los datos. Mandele un wpp a Kevin
          </h3>
        ) : (
          <>
            {searchText && searchResult.length === 0 ? (
              <h3 className={s.noResultText}>
                No se encontraron resultados para: {searchText}
              </h3>
            ) : (
              <div className={s.table}>
                <Table
                  aria-label="Table of products"
                  css={{
                    height: "auto",
                    minWidth: "100%",
                    zIndex: 99,
                    padding: "1rem 0",
                  }}
                  shadow={false}
                >
                  <Table.Header columns={columns}>
                    {(column) => (
                      <Table.Column key={column.key}>
                        {column.label}
                      </Table.Column>
                    )}
                  </Table.Header>
                  <Table.Body
                    loadingState={loading}
                    items={searchResult.length > 0 ? searchResult : inventory}
                  >
                    {(item) => (
                      <Table.Row key={item.key}>
                        {(columnKey) => (
                          <Table.Cell>{item[columnKey]}</Table.Cell>
                        )}
                      </Table.Row>
                    )}
                  </Table.Body>
                </Table>
              </div>
            )}
          </>
        )}
      </Layout>
    </>
  );
}

export default Productos;
