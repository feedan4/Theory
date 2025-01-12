import axios from "axios";

async function getAllProducts() {
    const res = await axios.get(`https://ecommerse.davidhtml.xyz/products/all?limit=120`)
    return res
}

async function getProductById(probyid) {
    const res = await axios.get(`https://ecommerse.davidhtml.xyz/products/get/${probyid}`)
    return res.data
}

async function getProductsByCategory(categid, queryParams) {
    const res = await axios.get(`https://ecommerse.davidhtml.xyz/products/all?categoryId=${categid}&${queryParams}`);
    return res
}

async function getAllCategories() {
    const res = await axios.get("https://ecommerse.davidhtml.xyz/categories/all")
    return res.data
}

export {getAllProducts, getAllCategories, getProductsByCategory, getProductById}