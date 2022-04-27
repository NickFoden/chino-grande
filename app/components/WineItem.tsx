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

const WineItem = ({ data }: { data: Item }) => (
  <li className="wine_item_li">
    <h3 className="menu_item_h3">{data.fields.name}</h3>
    <p className="wine_desc">
      {data.fields.desc.replace("'", "")}{" "}
      <span className="wine_grapes">
        {data.fields?.grapes?.replace(",", "")}
      </span>
      ,&nbsp;{data.fields.vintage}&nbsp;$
      {data.fields.price.replace("$", "")}
    </p>
  </li>
);

export default WineItem;
