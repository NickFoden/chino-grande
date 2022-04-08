import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { contentClient } from "~/utils/contentful";
import Page from "~/components/Page";

type LoaderData = {
  fields: {
    introBody?: string;
    introTitle: string;
  };
  sys: {
    id: string;
  };
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
    <Page>
      <div>
        <div className="home_img">
          <a href="http://www.ac-bu.info/">
            <img src={"look_back_ac-bu.png"} alt="driver looking back" />
          </a>
        </div>
        <h1 style={{ margin: "1rem auto", textAlign: "center" }}>
          {data.fields.introTitle}
        </h1>
        <p className="text-center">
          a cozy neighborhood restaurant and karaoke saloon
        </p>
      </div>
    </Page>
  );
}
