import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { contentClient } from "~/utils/contentful";
import Page from "~/components/Page";
import MenuItem from "~/components/MenuItem";
import WineItem from "~/components/WineItem";
import styles from "~/styles/drinks.css";

interface Cocktail {
  fields: {
    desc: string;
    name: string;
    price: string;
  };
  sys: {
    id: string;
  };
}

interface CanBottle {
  fields: {
    desc: string;
    name: string;
    price: string;
  };
  sys: {
    id: string;
  };
}

interface Draft {
  fields: {
    desc: string;
    name: string;
    price: string;
  };
  sys: {
    id: string;
  };
}

interface Wine {
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

type LoaderData = {
  fields: {
    cansbottles: CanBottle[];
    cocktails: Cocktail[];
    drafts: Draft[];
    redWines: Wine[];
    roseWines: Wine[];
    skinContactWines: Wine[];
    sparklingWines: Wine[];
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
    "6gzu0gxzi2UG8zLrkyWmqG"
  );
  return data;
};

const Drinks = () => {
  const data = useLoaderData<LoaderData>();
  const { fields } = data;
  return (
    <Page>
      <div className="drinks_container">
        <h2 className="drinks_h2">Cocktails</h2>
        <ul className="drinks_ul">
          {fields.cocktails.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <h2 className="drinks_h2">Drafts</h2>
        <ul className="drinks_ul">
          {fields.drafts.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <h2 className="drinks_h2">Can, Bottle</h2>
        <ul className="drinks_ul">
          {fields.cansbottles.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <h2 className="drinks_h2">Wine !</h2>
        <ul className="drinks_ul">
          {fields.redWines.map((w) => (
            <WineItem key={w.sys.id} data={w} />
          ))}
        </ul>
        <ul className="drinks_ul">
          {fields.roseWines.map((w) => (
            <WineItem key={w.sys.id} data={w} />
          ))}
        </ul>
        <ul className="drinks_ul">
          {fields.skinContactWines.map((w) => (
            <WineItem key={w.sys.id} data={w} />
          ))}
        </ul>
        <ul className="drinks_ul">
          {fields.sparklingWines.map((w) => (
            <WineItem key={w.sys.id} data={w} />
          ))}
        </ul>
      </div>
    </Page>
  );
};

export default Drinks;
