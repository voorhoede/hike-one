import React from 'react';

class FloatingTriangle extends React.Component {
    render() {
        return (
            <svg className={[this.props.color, 'floatin-triangle'].join(' ')} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="415" height="455" viewBox="0 0 415 455">
                <defs>
                    <path id="b" d="M170.912 767.496l287.176 74.364a2 2 0 0 1 1.204 2.98l-154.94 253.066a2 2 0 0 1-3.56-.295L168.556 770.18a2 2 0 0 1 2.356-2.685z"/>
                    <filter id="a" width="182.4%" height="172.4%" x="-41.2%" y="-27.2%" filterUnits="objectBoundingBox">
                        <feOffset dy="30" in="SourceAlpha" result="shadowOffsetOuter1"/>
                        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="35"/>
                        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                    </filter>
                </defs>
                <g fill="none" fillRule="evenodd" transform="translate(-106 -734)">
                    <use fill="#000" filter="url(#a)" xlinkHref="#b"/>
                    <use fill="#FE595B" xlinkHref="#b"/>
                </g>
            </svg>
        );
    }
}

export default FloatingTriangle;
