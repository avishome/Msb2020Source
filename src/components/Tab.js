import React from "react";
import PropTypes from 'prop-types';
class Tab extends React.Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label
            },
        } = this;

        let className = 'bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold';
        if (activeTab === label) {
            className = 'bg-white inline-block border-t rounded-tr py-2 px-4 md:px-16 lg:px-32 text-blue-700 font-semibold';
        }

        return (
            <><button
                className={className}
                onClick={onClick}
            >
                {label}
            </button>
            <button className={"bg-gradient-to-l from-white rounded-tl px-2 border-t " + ((label == "ראשי")?" ":"hover:bg-red-200")} onClick={()=>{this.props.closeFunc(this.props.label)}}></button>
            </>
        );
    }
}


export default Tab;