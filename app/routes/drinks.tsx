import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { contentClient } from "~/utils/contentful";
import Page from "~/components/Page";
import MenuItem from "~/components/MenuItem";
import WineItem from "~/components/WineItem";

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

export let loader: LoaderFunction = async () => {
  const data: LoaderData = await contentClient.getEntry(
    "6gzu0gxzi2UG8zLrkyWmqG"
  );
  return data;
};

export default function Index() {
  const data = useLoaderData<LoaderData>();
  const { fields } = data;
  return (
    <Page>
      <div>
        <h2>Cocktails</h2>
        <ul>
          {fields.cocktails.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <h2>Drafts</h2>
        <ul>
          {fields.drafts.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <h2>Can, Bottle</h2>
        <ul>
          {fields.cansbottles.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <h2>Wine !</h2>
        <ul>
          {fields.redWines.map((w) => (
            <WineItem key={w.sys.id} data={w} />
          ))}
        </ul>
        <ul>
          {fields.roseWines.map((w) => (
            <WineItem key={w.sys.id} data={w} />
          ))}
        </ul>
        <ul>
          {fields.skinContactWines.map((w) => (
            <WineItem key={w.sys.id} data={w} />
          ))}
        </ul>
        <ul>
          {fields.sparklingWines.map((w) => (
            <WineItem key={w.sys.id} data={w} />
          ))}
        </ul>
      </div>
    </Page>
  );
}
