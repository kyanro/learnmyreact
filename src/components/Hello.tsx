import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        let test =  require("mytest-loader");
        // test("hoge");
        return <h1>Hello {this.props.compiler}</h1>;
    }
}
