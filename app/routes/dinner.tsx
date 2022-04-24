import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { contentClient } from "~/utils/contentful";
import Page from "~/components/Page";
import MenuItem from "~/components/MenuItem";

interface Small {
  fields: {
    addOnDesc: string;
    addOnPrice: string;
    desc: string;
    name: string;
    price: string;
  };
  sys: {
    id: string;
  };
}

interface Skewer {
  fields: {
    desc: string;
    name: string;
    price: string;
  };
  sys: {
    id: string;
  };
}

interface Main {
  fields: {
    desc: string;
    name: string;
    price: string;
  };
  sys: {
    id: string;
  };
}

interface Dessert {
  fields: {
    desc: string;
    name: string;
    price: string;
  };
  sys: {
    id: string;
  };
}

type LoaderData = {
  fields: {
    dessert: Dessert[];
    mains: Main[];
    service: string;
    skewers: Skewer[];
    smalls: Small[];
  };
  sys: {
    id: string;
  };
};

export let loader: LoaderFunction = async () => {
  const data: LoaderData = await contentClient.getEntry(
    "6SPsrAXZzVDg8i1eqhd5vg"
  );
  return data;
};

export default function Index() {
  const data = useLoaderData<LoaderData>();
  const { fields } = data;
  return (
    <Page>
      <div>
        <h1>{fields.service}</h1>
        <ul>
          {fields.smalls.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <ul style={{ marginLeft: "2rem " }}>
          <h3 style={{ marginLeft: "2rem", fontSize: "24px" }}>
            Charcoal Skewers
          </h3>
          {fields.skewers.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <ul>
          {fields.mains.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <ul>
          {fields.dessert.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
      </div>
    </Page>
  );
}
