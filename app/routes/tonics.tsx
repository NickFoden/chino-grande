import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { contentClient } from "~/utils/contentful";
import Page from "~/components/Page";
import styles from "~/styles/tonics.css";

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

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const loader: LoaderFunction = async () => {
  const data: LoaderData = await contentClient.getEntry(
    "2fHBIQEVe8YrG8BLoWLuxH"
  );
  return data;
};

const Tonics = () => {
  const data = useLoaderData<LoaderData>();
  const { fields } = data;
  return (
    <Page>
      <div className="tonics_container">
        <h1>Tonics</h1>
        <div className="tonics_intro">
          <p>{fields.intro}</p>
          <br />
          <p>{fields.intro2}</p>
        </div>
        <ul className="tonics_ul">
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
      </div>
    </Page>
  );
};

export default Tonics;
