import axios from "axios";

const createProduct = async (data) => {
    // const ProductData = {
    //     "name": "shirt5",
    //     "quantity": 10,
    //     "price": 250,
    //     "description": "Short sleeve t-shirt. 100% cotton. Garment-dyed.Screen printed Jeremiah graphic on front chest. Screen printed “When In Doubt Knock Em Out!” graphic on back.",
    //     "image": "https://i.ibb.co/xsbBcHG/cup.webp"
    // }
    const response = await axios(`${process.env.BASEURL}/api/v1/createProduct`, { method: "POST" })
    return response;
}

export {
    getAllProductsData,
    createProduct
}