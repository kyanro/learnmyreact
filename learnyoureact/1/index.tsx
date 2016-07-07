import * as React from "react";
import * as ReactDom from "react-dom";

import {Hello} from "../../src/components/Hello";

ReactDom.render(
    <Hello  framework="framework" compiler="type script" />,
    document.getElementById("example")
)
