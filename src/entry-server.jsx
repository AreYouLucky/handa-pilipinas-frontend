import React from "react";
import { StaticRouterProvider } from "react-router-dom/server";
import { createStaticHandler, createStaticRouter } from "react-router-dom/server";
import { routes } from "./routes/router";

export async function render(url, res) {
  const { query, dataRoutes } = createStaticHandler(routes);
  const context = await query(url);

  const router = createStaticRouter(dataRoutes, context);

  const jsx = <StaticRouterProvider router={router} context={context} />;

  return jsx;
}
