import axios from "axios";

async function getAllProducts() {
    const res = await axios.get("https://ecommerse.apasni.me/products/all")
    return res.data
}

async function getAllCategories() {
    const res = await axios.get("https://ecommerse.apasni.me/categories/all")
    return res.data
}


export {getAllProducts, getAllCategories}