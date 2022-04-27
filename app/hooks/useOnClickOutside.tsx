import { useEffect, useRef } from "react";

const useOnClickOutside = (
  ref: React.MutableRefObject<any>,
  // burgerRef: React.MutableRefObject<any>,
  handler: (e: any) => void
) => {
  useEffect(
    () => {
      const listener = (event: { target: any }) => {
        // Do nothing if clicking ref's element or descendent elements
        if (
          !ref.current ||
          ref.current.contains(event.target)
          // ||
          // burgerRef.current.contains(event.target)
        ) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [
      ref,
      handler,
      //  burgerRef
    ]
  );
};

export default useOnClickOutside;
