import React from 'react';
import Link  from 'next/link';

class SecondaryButton extends React.Component {
    render() {
        return (
            <Link href={this.props.href}>
                <a className={'btn secondary ' + this.props.className}>
                    {this.props.value}
                    <svg className="secondary--arrow" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                        <path fill="#FF5B5D" fillRule="evenodd" d="M9.975 4.696L5.712.166a.533.533 0 0 0-.754-.02c-.207.186-.212.55-.02.753L8.36 4.53H.533a.533.533 0 1 0 0 1.066H8.36l-3.422 3.63a.558.558 0 0 0 .02.754c.21.206.558.189.754-.02l4.263-4.53a.475.475 0 0 0 .15-.366.624.624 0 0 0-.15-.367z"/>
                    </svg>
                </a>
            </Link>
        );
    }
}

export default SecondaryButton;
