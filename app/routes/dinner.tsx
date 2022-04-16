import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { contentClient } from "~/utils/contentful";
import Page from "~/components/Page";
import MenuItem from "~/components/MenuItem";

interface MenuItem {
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
    sectionOne: string;
    sectionOneMenuItems: MenuItem[];
    sectionTwo: string;
    sectionTwoMenuItems: MenuItem[];
    sectionThree: string;
    sectionThreeMenuItems: MenuItem[];
    service: string;
  };
  sys: {
    id: string;
  };
};

export let loader: LoaderFunction = async () => {
  const data: LoaderData = await contentClient.getEntry(
    "3tYkuOhrGhFak4IPli5Bng"
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
        <h2>{fields.sectionOne}</h2>
        <ul>
          {fields.sectionOneMenuItems.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <h2>{fields.sectionTwo}</h2>
        <ul>
          {fields.sectionTwoMenuItems.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
        <h2>{fields.sectionThree}</h2>
        <ul>
          {fields.sectionThreeMenuItems.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul>
      </div>
    </Page>
  );
}
