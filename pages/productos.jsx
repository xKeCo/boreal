// React

// Next

// Local Components
import { Button, Col, Row, Table, Tooltip } from "@nextui-org/react";
import { SEO, Sidebar } from "../components";

// Styles
import s from "../styles/Productos.module.css";

function Productos() {
  const columns = [
    {
      key: "id",
      label: "ID",
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
      key: "total",
      label: "TOTAL $",
    },
    {
      key: "category",
      label: "CATEGORIA",
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Jam - Raspberry",
      stock: 84,
      price: 938369,
      total: 6482822,
      category: "Adams Inc",
    },
    {
      id: 2,
      name: "Mountain Dew",
      stock: 64,
      price: 4201,
      total: 96686701,
      category: "Emmerich, Klocko and Boyer",
    },
    {
      id: 3,
      name: "Juice - Cranberry, 341 Ml",
      stock: 6,
      price: 174115,
      total: 3898117,
      category: "Hermann, Morissette and Abernathy",
    },
    {
      id: 4,
      name: "Pork - Ham Hocks - Smoked",
      stock: 12,
      price: 303217,
      total: 37333712,
      category: "Pagac-Ferry",
    },
    {
      id: 5,
      name: "Peas - Pigeon, Dry",
      stock: 39,
      price: 600276,
      total: 90117827,
      category: "Wunsch-Nolan",
    },
    {
      id: 6,
      name: "Soup - Campbells Chili",
      stock: 30,
      price: 107413,
      total: 82286302,
      category: "Bailey-Schuster",
    },
    {
      id: 7,
      name: "Pepper - Jalapeno",
      stock: 39,
      price: 400419,
      total: 13133657,
      category: "Wuckert Inc",
    },
    {
      id: 8,
      name: "Mint - Fresh",
      stock: 87,
      price: 558398,
      total: 43832734,
      category: "Cruickshank Inc",
    },
    {
      id: 9,
      name: "Fish - Base, Bouillion",
      stock: 47,
      price: 653589,
      total: 75603009,
      category: "Halvorson, Kemmer and Bernhard",
    },
    {
      id: 10,
      name: "Cornstarch",
      stock: 63,
      price: 559057,
      total: 88565428,
      category: "Lind, West and Crist",
    },
    {
      id: 11,
      name: "Muffin Mix - Blueberry",
      stock: 52,
      price: 327510,
      total: 97061342,
      category: "Romaguera-Abshire",
    },
    {
      id: 12,
      name: "Pop - Club Soda Can",
      stock: 65,
      price: 414224,
      total: 8699721,
      category: "Howe-Kassulke",
    },
  ];

  return (
    <>
      <SEO title="Productos" />
      <div className={s.flex}>
        <Sidebar />
        <div className={s.container}>
          <h1>Productos</h1>

          <div className={s.table}>
            <Table
              css={{
                height: "auto",
                minWidth: "100%",
              }}
              shadow={false}
            >
              <Table.Header columns={columns}>
                {(column) => (
                  <Table.Column key={column.key}>{column.label}</Table.Column>
                )}
              </Table.Header>
              <Table.Body items={rows}>
                {(item) => (
                  <Table.Row key={item.key}>
                    {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productos;
