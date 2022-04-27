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

const MenuItem = ({ data }: { data: Item }) => (
  <>
    <li className="menu_item_li">
      <h3 className="menu_item_h3">{data.fields.name}</h3>&nbsp;
      <p className="menu_item_desc">
        <>{data.fields.desc} $</>
        {data.fields.price.replace("$", "")}
      </p>
    </li>
    {data.fields.addOnDesc && data.fields.addOnPrice ? (
      <li className="menu_item_li">
        <p className="menu_item_desc">
          &nbsp;+ {data.fields.addOnDesc.replace("+", "")}&nbsp;$
          {data.fields?.addOnPrice.replace("$", "")}
        </p>
      </li>
    ) : null}
  </>
);

export default MenuItem;
