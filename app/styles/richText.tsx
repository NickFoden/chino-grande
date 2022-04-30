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
          fontSize: "14px",
          lineHeight: "1.1",
          marginBottom: "1rem",
          maxWidth: "90vw",
          width: "800px;",
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
          style={{ color: "#6495ED", fontSize: "14px", marginTop: "2rem" }}
        >
          {children}
        </a>
      );
    },
  },
};
