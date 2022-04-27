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
  if (!data.fields || !data.fields.name) {
    return null;
  }
  return (
    <>
      <li className="menu_item_li">
        <span style={{ marginLeft: "10px" }}>
          <h3
            className="menu_item_h3"
            style={{ display: "inline", marginLeft: "-10px" }}
          >
            {data?.fields?.name}
          </h3>
          &nbsp;
          <p className="menu_item_desc" style={{ display: "inline" }}>
            {data.fields?.desc}{" "}
            <span style={{ whiteSpace: "nowrap" }}>
              {`$${data.fields?.price?.replace("$", "")}`}
            </span>
          </p>
        </span>
      </li>
      {data?.fields?.addOnDesc && data?.fields?.addOnPrice ? (
        <li className="menu_item_li">
          <span style={{ marginLeft: "10px" }}>
            <p
              className="menu_item_desc"
              style={{ display: "inline", marginLeft: "-10px" }}
            >
              &nbsp;+ {data.fields?.addOnDesc.replace("+", "")}&nbsp;$
              {data.fields?.addOnPrice.replace("$", "")}
            </p>
          </span>
        </li>
      ) : null}
    </>
  );
};

export default MenuItem;
