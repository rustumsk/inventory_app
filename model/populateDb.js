const {Client} = require('pg');

require('dotenv').config();

const connect = process.env.DEVCONNECT;

const SQL = `CREATE TABLE IF NOT EXISTS showtype(
    type_id integer primary key generated always as identity,
    type_name varchar(255) unique
);
CREATE TABLE IF NOT EXISTS showcategory(
    category_id integer primary key generated always as identity,
    category_name varchar(255) unique 
);
CREATE TABLE IF NOT EXISTS showcountry(
    country_id integer primary key generated always as identity,
    country_name varchar(255) unique
);
CREATE TABLE IF NOT EXISTS show(
    show_id integer primary key generated always as identity,
    show_type_id integer references showtype(type_id),
    showcategory_id integer references showcategory(category_id),
    showcountry_id integer references showcountry(country_id),
    show_name varchar(255),
    show_rating integer
);
insert into showtype (type_name) values ('MOVIE'), ('TV_SHOW');

insert into showcategory (category_name) values ('Action'), ('Comedy'), ('Romance');

insert into showcountry (country_name) values ('China'), ('Japan'), ('USA');

insert into show (show_type_id, showcategory_id, showcountry_id, show_name, show_rating) values ((select type_id from showtype
where type_name = 'MOVIE'), (select category_id from showcategory where category_name = 'Action'), (select country_id from showcountry 
where country_name = 'USA'), 'Shrek', 9);

`;

async function populate(){
    try{
        console.log('seeding .....')
        const client = new Client({
            connectionString: connect
        });
        await client.connect();
        await client.query(SQL);
        await client.end();
        console.log("done!");
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {populate};