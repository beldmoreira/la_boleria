import db from "../config/db.js"

const postCakes = async (name,price,description,image) => {
   await db.query 
    (`INSERT INTO cakes (name, price, description,image) VALUES ($1, $2, $3, $4)`,
    [name, price, description,image]
    );
};

const getCakeByName = async (name) => {
    const cake = await db.query
    (`SELECT * from cakes WHERE name = $1`,
    [name]
    );
    return cake
}
export {
    postCakes,
    getCakeByName
}

