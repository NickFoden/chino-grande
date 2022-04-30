import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { ReactChild, ReactFragment, ReactPortal } from "react";
export const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (
      node: any,
      children:
        | boolean
        | ReactChild
        | ReactFragment
        | ReactPortal
        | null
        | undefined
    ) => (
      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.1",
          textTransform: "lowercase",
          marginBottom: "1rem",
          maxWidth: "90vw",
          width: "900px",
        }}
      >
        {children}
      </p>
    ),
    [INLINES.HYPERLINK]: (
      node: { data: any },
      children:
        | boolean
        | ReactChild
        | ReactFragment
        | ReactPortal
        | null
        | undefined
    ) => {
      return (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black", fontSize: "1rem", marginTop: "2rem" }}
        >
          {children}
        </a>
      );
    },
  },
};
