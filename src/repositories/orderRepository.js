import db from "../config/db.js";

const postOrder = async (clientId,cakeId,quantity,totalPrice) => {
    await db.query (`
    INSERT INTO orders ("clientId","cakeId",quantity,"totalPrice") VALUES ($1,$2,$3,$4)`,
    [clientId,cakeId,quantity,totalPrice]
    );
};

const checkClientId = async (clientId) => {
    const client = await db.query (`
    SELECT id FROM clients WHERE id=$1`,
    [clientId]
    );
    return client;
}

const checkCakeId = async (cakeId) => {
    const cake = await db.query (`
    SELECT id FROM cakes WHERE id=$1`,
    [cakeId]
    );
    return cake;
}

const getAllOrders = async () => {
    const result = await db.query(
    `SELECT orders.*, clients.*, cakes.id AS "cakeId", cakes.price,cakes.image,cakes.description, cakes.name AS "cakeName"  FROM orders
    JOIN clients ON orders."clientId" = clients.id
    JOIN cakes ON orders."cakeId"= cakes.id
    `
    );
    return result.rows; 
}

const getOrdersById = async (id) => {
    const result = await db.query (
    `SELECT orders.*, clients.*, cakes.id AS "cakeId", cakes.price,cakes.image,cakes.description, cakes.name AS "cakeName"  FROM orders
    JOIN clients ON orders."clientId" = clients.id
    JOIN cakes ON orders."cakeId"= cakes.id 
    WHERE orders.id = $1
    `, [id]   
    );
    return result.rows;
}

export {
    postOrder,
    checkClientId,
    checkCakeId,
    getAllOrders,
    getOrdersById 
}