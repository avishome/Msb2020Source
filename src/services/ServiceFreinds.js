import React from "react";

export default class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.edit !== prevProps.edit) {
            console.log("dddd")
            this.props.clients[0].name = "אבגדהו";
        }
    }
    render() {
        return null
    }

}