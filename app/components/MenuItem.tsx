import React from "react";

interface Item {
  fields: {
    desc: string;
    name: string;
    price: string;
    addOnDesc?: string;
    addOnPrice?: string;
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
          {/* <p style={{ marginLeft: "1rem" }}>{data.fields.subName}</p> */}
        </span>
        <p>$ {data.fields.price.replace("$", "")}</p>
      </span>
      <p style={{ marginLeft: "1rem", width: "330px" }}>{data.fields.desc}</p>
      {data.fields.addOnDesc && data.fields.addOnPrice ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
            width: "350px",
          }}
        >
          <p style={{ marginLeft: "1rem" }}>
            + {data.fields.addOnDesc.replace("+", "")}
          </p>
          <p>$ {data.fields?.addOnPrice.replace("$", "")}</p>
        </div>
      ) : null}
    </li>
  );
};

export default MenuItem;
