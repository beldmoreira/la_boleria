import * as orderRepository from "../repositories/orderRepository.js";

const createOrder = async (req,res) => {
    const {clientId,cakeId,quantity,totalPrice} = req.body
    try {
        const order = await orderRepository.checkClientId(clientId)
        if (order.rowCount === 0){
            res.sendStatus(404)
        }
        const cake = await orderRepository.checkCakeId(cakeId)
        if (cake.rowCount === 0){
            res.sendStatus(404)
        }
        await orderRepository.postOrder(clientId,cakeId,quantity,totalPrice)
        res.sendStatus(201);
    } catch(e){
        console.log(e);
        res.sendStatus(500)
    }
}

const getOrders = async (_req,res) => {
    try{
        const orders = []
        const result = await orderRepository.getAllOrders()
        if(result.rowCount === 0){
            res.status(400).send([])
        }
        for(let i= 0;i < result.length;i++){
            orders.push(
                {
                       client: {
                       id:result[i].clientId,
                       name: result[i].name,
                       address: result[i].address,
                       phone:result[i].phone
                   },
                        cake: {
                        id:result[i].cakeId,
                        name: result[i].cakeName,
                        price: result[i].price,
                        description: result[i].description,
                        image:result[i].image
                   },
                   createdAt:result[i].createdAt,
                   quantity: result[i].quantity,
                   totalPrice:result[i].totalPrice

                }
            )
        }
        return res.status(200).send(orders)
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
}

const getOrderId = async (req,res)=> {
    const {id} = req.params;
    try{
        const orders = []
        const result = await orderRepository.getOrdersById(id)
        if(result.length === 0){
        return res.sendStatus(404)
        }  
           
        for(let i= 0;i < result.length;i++){
            orders.push(
                {
                       client: {
                       id:result[i].clientId,
                       name: result[i].name,
                       address: result[i].address,
                       phone:result[i].phone
                   },
                        cake: {
                        id:result[i].cakeId,
                        name: result[i].cakeName,
                        price: result[i].price,
                        description: result[i].description,
                        image:result[i].image
                   },
                   createdAt:result[i].createdAt,
                   quantity: result[i].quantity,
                   totalPrice:result[i].totalPrice

                }
            )
        }
        return res.status(200).send(orders)
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
}


const ordersControllers = {
    createOrder,
    getOrders,
    getOrderId
}

export default ordersControllers;