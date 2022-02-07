import {React, useEffect, useRef} from "react";
import { Link } from "react-router-dom";

const MobileNav = (show, setShow) => {

    const ref = useRef();
    const useOnClickOutside =  (ref, handler) => {
        useEffect(
          () => {
            const listener = (event) => {
              // Do nothing if clicking ref's element or descendent elements
              if (!ref.current || ref.current.contains(event.target)) {
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
          // It's worth noting that because the passed-in handler is a new ...
          // ... function on every render that will cause this effect ...
          // ... callback/cleanup to run every render. It's not a big deal ...
          // ... but to optimize you can wrap handler in useCallback before ...
          // ... passing it into this hook.
          [ref, handler]
        );
      }

  return (
    <div >
      <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/">
        Projects
      </Link>
      <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/about">
        About
      </Link>
      <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default MobileNav;
