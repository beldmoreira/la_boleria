import * as clientsRepository from "../repositories/clientsRepository.js";

const createClient = async(req,res) => {
    const {name,address,phone} = req.body;
    try {
        const client = await clientsRepository.postClients(name,address,phone)
        res.status(201).send(client);
    } catch (e){
        console.log(e);
        res.sendStatus(500);
    }

}
const getClientsOrders = async(req,res) => {
    const {id} = req.params
    try {
        const result = []
        const order = await clientsRepository.getOrdersById(id)
        console.log(order)
        if(order.rowCount === 0){
            return res.sendStatus(404)   
        }

        for(let i= 0;i < order.rows.length;i++){
        

            result.push(
        
            {
                orderId: order.rows[i].orderId ,
                quantity:order.rows[i].quantity ,
                createdAt:order.rows[i].createdAt,
                totalPrice:order.rows[i].totalPrice,
                cakeName:order.rows[i].cakeName
            }
            )
        }
        res.status(200).send(result);
    } catch (e){
        console.log(e);
        res.sendStatus(500);
    }
}

const clientControllers = {
    createClient,
    getClientsOrders
}

export default clientControllers