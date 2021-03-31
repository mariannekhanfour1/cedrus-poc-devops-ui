import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { RouteChildrenProps } from "react-router";


export const RouterContext = React.createContext<RouteChildrenProps>(null);

interface HookedBrowserRouterProps {
  children: React.ReactNode;
}

export const HookedBrowserRouter = ({ children }: HookedBrowserRouterProps) => (
  <BrowserRouter>
    <Route>
      {routeProps => (
        <RouterContext.Provider value={routeProps}>
          {children}
        </RouterContext.Provider>
      )}
    </Route>
  </BrowserRouter>
);