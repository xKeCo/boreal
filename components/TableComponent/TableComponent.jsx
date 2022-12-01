// NextUI Components
import { Table } from "@nextui-org/react";

// Buttons
import { ProductActionButtons } from "..";

// Styles
import s from "./TableComponent.module.css";

export function TableComponent({
  title,
  columns,
  data,
  loading,
  searchResult,
}) {
  const renderCell = (item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "name":
        return <p className={s.table__item}>{cellValue.toUpperCase()}</p>;
      case "stock":
        return <p className={s.table__item}>{cellValue}</p>;
      case "price":
        return <p className={s.table__item}>{cellValue}</p>;
      case "totalPrice":
        return <p className={s.table__item}>{cellValue}</p>;
      case "category":
        return <p className={s.table__item}>{cellValue.toUpperCase()}</p>;

      case "manejo":
        return (
          <ProductActionButtons name={item.name} id={item.id} data={item} />
        );
      default:
        return cellValue;
    }
  };

  return (
    <div className={s.table}>
      <Table
        aria-label={`Table of ${title}`}
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
            <Table.Column
              key={column.key}
              // hideHeader={column.key === "manejo"}
              css={{
                color: "#11181c",
                fontWeight: "500",
                fontSize: "1rem",
                padding: "0 0.5rem 0 0 ",
              }}
            >
              {column.label}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body
          loadingState={loading}
          items={searchResult.length > 0 ? searchResult : data}
        >
          {(item) => (
            <Table.Row
              key={item.key}
              css={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                },
                width: "100px",
              }}
            >
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
