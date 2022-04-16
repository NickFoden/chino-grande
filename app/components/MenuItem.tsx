import React from "react";

interface Item {
  fields: {
    desc: string;
    name: string;
    price: string;
    subName?: string;
  };
  sys: {
    id: string;
  };
}

const MenuItem = ({ data }: { data: Item }) => {
  return (
    <li
      style={{
        listStyle: "none",
      }}
    >
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "350px",
        }}
      >
        <span
          style={{
            alignItems: "baseline",
            display: "flex",
          }}
        >
          <h3>{data.fields.name}</h3>{" "}
          <p style={{ marginLeft: "1rem" }}>{data.fields.subName}</p>
        </span>
        <p>{data.fields.price}</p>
      </span>
      <p style={{ marginLeft: "1rem" }}>{data.fields.desc}</p>
    </li>
  );
};

export default MenuItem;
