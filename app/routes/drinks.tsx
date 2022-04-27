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

interface Beer {
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
    cocktailsSectionTitle: string;
    cocktails: Cocktail[];
    beerSectionTitle: string;
    drafts: Beer[];
    wineSectionTitle: string;
    wine: Wine[];
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
  console.dir(fields);

  return (
    <Page>
      <div className="drinks_container">
        <h2 className="drinks_h2">{fields.cocktailsSectionTitle}</h2>
        <ul className="drinks_ul">
          {fields.cocktails.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <h2 className="drinks_h2">{fields.beerSectionTitle}</h2>
        <ul className="drinks_ul">
          {fields.drafts.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <h2 className="drinks_h2">{fields.wineSectionTitle}</h2>
        <ul className="drinks_ul">
          {fields.wine.map((w) => (
            <WineItem key={w.sys.id} data={w} />
          ))}
        </ul>
      </div>
    </Page>
  );
};

export default Drinks;
