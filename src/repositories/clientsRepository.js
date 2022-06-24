import db from "../config/db.js";

const postClients = async (name,address,phone) => {
    await db.query
    (`INSERT into clients (name,address,phone) VALUES ($1, $2, $3)`,
    [name,address,phone]
    );
};

const getOrdersById = async (id) => {
    return db.query
    (`  SELECT orders.id AS "orderId",orders.quantity,orders."createdAt",orders."totalPrice", cakes.name AS "cakeName" FROM clients
        JOIN orders ON clients.id=orders."clientId"
        JOIN cakes ON orders."cakeId"=cakes.id
        WHERE clients.id = $1`,
        [id]
    );
}
  
export{
    postClients,
    getOrdersById
}