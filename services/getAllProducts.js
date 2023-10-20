const { default: axios } = require("axios");

const getAllProducts = async () => {
    try {
        const response = await axios.get(`${process.env.BASEURL}/api/v1/getAllProducts`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export default getAllProducts;
