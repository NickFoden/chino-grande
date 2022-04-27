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
    price: string;
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
          {fields.tonics.map((t) => (
            <li key={t.sys.id}>
              <span style={{ display: "flex" }}>
                <h5 style={{ fontSize: "16px", margin: "1rem 0 0.5rem" }}>
                  {t.fields.name}
                </h5>
                <p style={{ fontStyle: "italic", marginRight: "0.2rem" }}>
                  {t.fields.desc}
                </p>
              </span>
              <p style={{ marginLeft: "1rem" }}>
                {t.fields.desc2}$ {t.fields.price.replace("$", "")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Page>
  );
};

export default Tonics;
