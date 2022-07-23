import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { contentClient } from "~/utils/contentful";
import Page from "~/components/Page";

type LoaderData = {
  fields: {
    body?: any;
    body2?: any;
    bodyImage: {
      fields: {
        title: string;
        description: string;
        file: {
          fileName: string;
          url: string;
        };
      };
    };
  };
  sys: {
    id: string;
  };
};

export let loader: LoaderFunction = async () => {
  const data: LoaderData = await contentClient.getEntry(
    "4r1Qy38ga6LeefVA09P7V4"
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
            src={
              data?.fields?.bodyImage?.fields?.file
                ? `${data.fields.bodyImage.fields.file.url}?fm=jpg&fl=progressive`
                : "/Lobster-680.png"
            }
            // src="/Lobster-680.png"
            // srcSet="Lobster-680.png 1x, Lobster-1024.png 2x,"
            alt={
              data?.fields?.bodyImage?.fields?.description ||
              "Side view of the lobster with fries"
            }
          />
          {/* <a href="https://www.youtube.com/watch?v=ACEBZ-KmuQo" target="_blank">
            <img src="/look_back_ac-bu.png" alt="driver looking back" />
          </a> */}
        </div>
        <br />
        <p className="text-center">
          {documentToReactComponents(data.fields?.body)}
        </p>
        <div style={{ height: "24px" }} />
        <div>
          <p className="text-center">
            {documentToReactComponents(data.fields?.body2)}
          </p>
        </div>
      </div>
    </Page>
  );
}
