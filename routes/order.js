const express = require("express");
const OrderModel = require("../models/order");
const OrderDetailModel = require("../models/orderDetail");
const Sequelize = require("sequelize");

const router = express.Router();

router
    .post("/createOrder", async (req, res) => {

        try {
           
           const {userId, restaurantName, orderItems} = req.body;

           let errors = [];
            
           if(!userId) errors.push("userId");
           if(!restaurantName) errors.push("restaurantName");
           if(!orderItems) errors.push("orderItems");

           if(errors.length > 0) return res.send({message:`These fields can not be empty ${errors}`})

           var twentyMinutesLater = new Date();
           twentyMinutesLater.setMinutes(twentyMinutesLater.getMinutes() + 20);

           let readyToCollect = twentyMinutesLater.toString()

           function makeid(length) {
                var result           = '';
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }


            // let order = await OrderModel.create({
            //     userId:userId,
            //     restaurantName:restaurantName,
            //     readyToCollect:readyToCollect,
            //     orderCode:orderCode
            // })
            let orderCode = makeid(8).toUpperCase();

            orderItems.map( async (item) => {
                let newItem = await OrderDetailModel.create({
                    // orderId:order.id.toString(),
                    restaurantName:restaurantName,
                    readyToCollect:readyToCollect,
                    orderCode:orderCode,
                    userId:userId,
                    productId:item.id,
                    productName:item.productName,
                    ingredients:item.ingredients,
                    qty:1
                })
            })

            res.send({message:"order craeted successfully"})

        } catch (error) {
            console.log("error", error)
            return res.send({message:"Error occurred", error})
        }
    })
    .get('/getAllOrderDetails', async (req, res) => {
        try {
            const orderDetails = await OrderDetailModel.findAll();
            return res.send({orderDetails})

        } catch (error) {
            console.log("error", error)
            return res.send({message:"Error occurred", error})
        }
    })
    .post('/getOrdersByUserId', async (req, res) => {
        try {
            const orderDetails = await OrderDetailModel.findAll({ where: {userId:req.body.userId} });
            return res.send({orderDetails})

        } catch (error) {
            console.log("error", error)
            return res.send({message:"Error occurred", error})
        }
    })
    .delete('/CancelOrder', async (req, res) => {
        try {
            const orderDetails = await OrderDetailModel.deleteOne({ where: {id:req.body.orderId} });
            return res.send({orderDetails})

        } catch (error) {
            console.log("error", error)
            return res.send({message:"Error occurred", error})
        }
    })

module.exports = router;
