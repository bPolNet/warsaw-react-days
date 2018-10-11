import React from "react"
import { render } from "react-dom"
import DevTools from "mobx-react-devtools"

import sum from "./components/sum/sum"
import Page from "./components/page/page"
sum()

render(
  <div>
    <DevTools />
    <Page page="http://www.bpol.net"/>
  </div>,
  document.getElementById("root")
);
