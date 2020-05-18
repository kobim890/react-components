import React from "react";
import './Content.css'
import Collapsible from "./Collapsible/Collapsible";
import RandomColorSquare from "./RandomColorSquare/RandomColorSquare";


class Content extends React.Component {

    render() {
        return (<div className="Content">
            <Collapsible header="this is the header">
                this is the content
                this is the content
                this is the content
                </Collapsible>
            <Collapsible header="this is the header2">
                this is the content2
                this is the content2
                this is the content2
            </Collapsible>
            <RandomColorSquare></RandomColorSquare>
        </div>);
    }
}
export default Content;