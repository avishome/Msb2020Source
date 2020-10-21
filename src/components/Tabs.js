import React from "react";
import Tab from './Tab';

import {functionsContext} from '../services/funcContext';

class Tabs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: "ראשי",
            sons: {}
        };
    }
    static contextType = functionsContext;
    static getDerivedStateFromProps(nextProps, prevState) {
        if (Object.keys(nextProps.sons).length !== Object.keys(prevState.sons).length) {
            if (Object.keys(nextProps.sons).length > Object.keys(prevState.sons).length) {
                const diff = Object.keys(nextProps.sons).filter(x => !Object.keys(prevState.sons).includes(x));
                return {
                   sons:JSON.parse(JSON.stringify(nextProps.sons)),
                    activeTab: diff[0]
                };
            }
            else{
                const diff = Object.keys(nextProps.sons).filter(x => Object.keys(prevState.sons).includes(x));
                return {
                    sons:JSON.parse(JSON.stringify(nextProps.sons)),
                    activeTab: diff[diff.length-1]
                };
            }
        }
        return {sons:JSON.parse(JSON.stringify(nextProps.sons))};
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }

    render() {
        const {
            onClickTabItem,
            state: {
                activeTab,
            }
        } = this;

        return (
            
            <div className="tabs">
                <div>
                    <ol className="flex overflow-x-auto">
                        {Object.keys(this.props.sons).map((child) => {
                            const label = child;
                            return (
                                <Tab
                                    closeFunc = {(x)=>this.context.close(x)}
                                    activeTab={activeTab}
                                    key={label}
                                    label={label}
                                    onClick={onClickTabItem}
                                />
                            );
                        })}
                    </ol>
                </div>
                <div className="tab-content bg-white opacity-80">
                    {this.props.render(this.state)}
                </div>
            </div>
        );
    }
}

export default Tabs;