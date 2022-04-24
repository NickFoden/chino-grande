import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { contentClient } from "~/utils/contentful";
import Page from "~/components/Page";
import MenuItem from "~/components/MenuItem";

interface Tonic {
  fields: {
    desc: string;
    desc2: string;
    name: string;
  };
  sys: {
    id: string;
  };
}

type LoaderData = {
  fields: {
    intro: string;
    intro2: string;
    tonics: Tonic[];
  };
  sys: {
    id: string;
  };
};

export let loader: LoaderFunction = async () => {
  const data: LoaderData = await contentClient.getEntry(
    "2fHBIQEVe8YrG8BLoWLuxH"
  );
  return data;
};

export default function Index() {
  const data = useLoaderData<LoaderData>();
  const { fields } = data;
  return (
    <Page>
      <div>
        <h1>Tonics</h1>

        <p>{fields.intro}</p>
        <br />
        <p>{fields.intro2}</p>
        <ul style={{ listStyle: "none" }}>
          {fields.tonics.map((t, idx) => (
            <li key={t.sys.id}>
              <h5 style={{ fontSize: "18px" }}>
                #{idx + 1}: {t.fields.name}
              </h5>
              <ul>
                <li>{t.fields.desc}</li>
                <li>{t.fields.desc2}</li>
              </ul>
            </li>
          ))}
        </ul>
        {/* <ul>
          {fields.smalls.map((i) => (
            <MenuItem data={i} key={i.sys.id} />
          ))}
        </ul> */}
      </div>
    </Page>
  );
}
