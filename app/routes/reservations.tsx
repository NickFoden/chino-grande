import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { contentClient } from "~/utils/contentful";
import Page from "~/components/Page";
import { options } from "~/styles/richText";
import styles from "~/styles/reservations.css";

type LoaderData = {
  fields: {
    body: any;
    title: string;
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
    "1xvinkzKrgCPXvxXz5v22Q"
  );
  return data;
};

export default function Reservations() {
  const data = useLoaderData<LoaderData>();
  return (
    <Page>
      <div className="reservations_container">
        <h1 className="h1_intro">{data.fields?.title}</h1>
        <div>{documentToReactComponents(data.fields.body, options)}</div>
      </div>
    </Page>
  );
}
