import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { contentClient } from "~/utils/contentful";
import Page from "~/components/Page";
import MenuItem from "~/components/MenuItem";
import styles from "~/styles/dinner.css";

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

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export let loader: LoaderFunction = async () => {
  const data: LoaderData = await contentClient.getEntry(
    "6SPsrAXZzVDg8i1eqhd5vg"
  );
  return data;
};

const Dinner = () => {
  const data = useLoaderData<LoaderData>();
  const { fields } = data;
  return (
    <Page>
      <div className="dinner_container">
        <h1>{fields.service}</h1>
        <ul className="dinner_ul">
          {fields.smalls.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <br />
        <ul className="dinner_ul">
          {fields.skewers.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <br />
        <ul className="dinner_ul">
          {fields.mains.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <br />
        <ul className="dinner_ul">
          {fields.dessert.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
      </div>
    </Page>
  );
};

export default Dinner;
