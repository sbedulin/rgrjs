import fs from 'fs';
import express from 'express';
import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';

import { MongoClient } from 'mongodb';

let app = express();
let port = 3000;

app.use(express.static('public'));


(async () => {
    let db = await MongoClient.connect(process.env.MONGO_URL);
    let schema = Schema(db);

    app.use('/graphql', GraphQLHTTP({
        schema: schema,
        graphiql: true
    }));

    app.listen(port, () => console.log('Server listening on %s', port));

    // Generate schema.json
    let json = await graphql(schema, introspectionQuery);
    fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
        if(err) throw err;

        console.log('JSON schema created');
    });
})();
