import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import { MongoClient } from 'mongodb';

let app = express();
let port = 3000;

app.use(express.static('public'));


(async () => {
    let db = await MongoClient.connect(process.env.MONGO_URL);

    app.use('/graphql', GraphQLHTTP({
        schema: schema(db),
        graphiql: true
    }));

    app.listen(port, () => console.log('Server listening on %s', port));
})();
