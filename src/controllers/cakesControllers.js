import * as cakesRepository from "../repositories/cakesRepository.js"

const createCake = async (req,res) => {
    const {name, price, description, image} = req.body
    try {
        
        if (name.length < 2 || price <= 0){
            return res.sendStatus(400);
        }
        const cake = await cakesRepository.getCakeByName(name)
        
        if (cake.rows[0]) {
            return res.status(409).json({message: "There is already a cake with this name. Register it with another one" });
        }
        const result = await cakesRepository.postCakes(name,price,description,image)
       
        res.status(201).send(result);
    } catch (e){
        console.log(e);
        res.sendStatus(500);
    }
}

const cakesControllers = {
    createCake
}

export default cakesControllers;

