import axios from "axios";

async function getAllProducts() {
    const res = await axios.get(`https://ecommerse.davidhtml.xyz/products/all?limit=`)
    return res
}

async function getProductById(probyid) {
    const res = await axios.get(`https://ecommerse.davidhtml.xyz/products/get/${probyid}`)
    return res.data
}

async function getProductsByCategory(categid) {
    const res = await axios.get(`https://ecommerse.davidhtml.xyz/products/all?categoryId=${categid}&limit=10`)
    return res
}

async function getAllCategories() {
    const res = await axios.get("https://ecommerse.davidhtml.xyz/categories/all")
    return res.data
}

export {getAllProducts, getAllCategories, getProductsByCategory, getProductById}