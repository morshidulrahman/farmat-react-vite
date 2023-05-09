import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

function Breadcrumb() {
  const [items, setitems] = useState([]);
  const router = useLocation();

  function generateBreadcrumbs() {
    // Remove any query parameters, as those aren't included in breadcrumbs
    const asPathWithoutQuery = router.pathname.split("?")[0];

    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter((v) => v.length > 0);

    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.
    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      // The title will just be the route string for now
      const title = subpath;
      return { href, title };
    });

    // Add in a default "Home" crumb for the top-level
    return [{ href: "/", title: "Home" }, ...crumblist];
  }

  useEffect(() => {
    setitems(generateBreadcrumbs());
  }, [router]);
  return (
    <div>
      {items.map((item, index) => (
        <span className="capitalize" key={index}>
          {items.length - 1 !== index ? (
            <>
              <Link to={item.href}>{item.title}</Link>
              <span className="mx-2">/</span>
            </>
          ) : (
            <span className="text-title">{item.title}</span>
          )}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumb;
