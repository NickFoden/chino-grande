import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { contentClient } from "~/utils/contentful";

type LoaderData = {
  fields: {
    introBody?: string;
    introTitle: string;
  }
  sys: {
    id: string;
  }
};

export let loader: LoaderFunction = async () => {
  const data: LoaderData = await contentClient.getEntry(
    "2LyGIvx6kwaUdGP9jtQuta"
  );
  return data;
};

export default function Index() {
  const data = useLoaderData<LoaderData>();
  return (
    <div
      style={{
        display: "flex",
        fontFamily: "courier, sans-serif",
        lineHeight: "1.4",
        width: "100vw",
      }}
    >
      <h1 style={{ margin: "4rem auto" }}>{data.fields.introTitle}</h1>
    </div>
  );
}
