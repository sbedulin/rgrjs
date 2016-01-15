import React from 'react';
import Relay from 'react-relay';

import Link from './Link';

class Main extends React.Component {
    render() {
        let content = this.props.store.links.map(link => {
            // TODO: make the LI a <LINK />
            return <Link key={link._id} link={link}></Link>;
        });

        return (
            <div>
                <h3>Links</h3>
                <ul>{content}</ul>
            </div>
        );
    }
}

Main = Relay.createContainer(Main, {
    fragments: {
        store: () => Relay.QL`
          fragment on Store {
            links {
              _id,
              ${ Link.getFragment('link') }
            }
          }
        `
    }
});

export default Main;
