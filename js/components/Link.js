import React from 'react';
import Relay from 'react-relay';

class Link extends React.Component {
    render() {
        let { link } = this.props;
        return (
            <li>
                <a href={link.url} target="_blank">{link.title}</a>
            </li>
        );
    }
}

Link = Relay.createContainer(Link, {
    fragments: {
        link: () => Relay.QL`
          fragment on Link {
            title,
            url
          }
        `
    }
});

export default Link;
