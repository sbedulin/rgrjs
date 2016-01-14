import { post } from 'jquery';
import ServerActions from './actions/ServerActions';

let API = {
    fetchLinks() {
        console.log('1. In API!');
        post('/graphql', {
            query: `{
                links {
                    _id,
                    title,
                    url
                }
            }`
        }).done(response => {
            ServerActions.receiveLinks(response.data.links);
        });
    }
};

export default API;