import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { contentClient } from "~/utils/contentful";
import Page from "~/components/Page";

type LoaderData = {
  fields: {
    introBody?: string;
    introMotto?: string;
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
          <img
            src="/Lobster-680.png"
            srcSet="Lobster-680.png 1x, Lobster-1024.png 2x,"
            alt="side view lobster and fries"
          />
          {/* <a href="https://www.youtube.com/watch?v=ACEBZ-KmuQo" target="_blank">
            <img src="/look_back_ac-bu.png" alt="driver looking back" />
          </a> */}
        </div>
        <br />
        <p className="text-center">{data.fields?.introMotto}</p>
        <h1 style={{ margin: "1rem auto", textAlign: "center" }}>
          {data.fields.introTitle}
        </h1>
        <p className="text-center">{data.fields?.introBody}</p>
      </div>
    </Page>
  );
}
