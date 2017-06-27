import React from 'react';

class DoubleDiamond extends React.Component {
    render() {
        return (
            <svg className={[this.props.shadow == "true" ? 'shadow' : '', 'double-diamond'].join(' ')} xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
                <g fill="none" fillRule="evenodd">
                    <rect className="double-diamond-bg" width="299.511" height="299.824" rx="4"/>
                    <g transform="translate(33 71)">
                        <rect className="back-diamond" width="109.818" height="110.183" x="23.053" y="23.337" rx="4" transform="rotate(45 77.961 78.429)"/>
                        <rect className="front-diamond" width="109.818" height="110.183" x="100.772" y="23.271" rx="4" transform="rotate(45 155.68 78.362)"/>
                    </g>
                </g>
            </svg>

        );
    }
}

export default DoubleDiamond;
