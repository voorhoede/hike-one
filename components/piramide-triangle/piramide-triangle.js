import React from 'react';

class PiramideTriangle extends React.Component {

    render() {
        return (
            <svg className={[this.props.color, 'piramide-triangle'].join(' ')} xmlns="http://www.w3.org/2000/svg" width="104" height="72" viewBox="0 0 104 72">
                <path fill="#FE595B" fillRule="evenodd" d="M.393 68.131L50.24.81a2 2 0 0 1 3.215 0l49.867 67.335a2 2 0 0 1-1.608 3.19L2 71.322a2 2 0 0 1-1.607-3.19z" />
            </svg>
        )
    }
}

export default PiramideTriangle;
