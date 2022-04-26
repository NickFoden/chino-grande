import React from "react";

interface Item {
  fields: {
    desc: string;
    grapes?: string;
    name: string;
    price: string;
    vintage: string;
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
        </span>
        <p>$ {data.fields.price.replace("$", "")}</p>
      </span>
      <p className="wine_desc">
        {data.fields.desc.replace("'", "")}{" "}
        <span className="wine_grapes">
          {data.fields?.grapes?.replace(",", "")}
        </span>
        , {data.fields.vintage}
      </p>
    </li>
  );
};

export default MenuItem;
