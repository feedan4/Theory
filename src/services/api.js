import axios from "axios";

async function getAllProducts() {
    const res = await axios.get(`https://ecommerse.davidhtml.xyz/products/all?limit=60`)
    return res
}

async function getProductById(probyid) {
    const res = await axios.get(`https://ecommerse.davidhtml.xyz/products/get/${probyid}`)
    return res.data
}

async function getProductsByCategory(categid) {
    const res = await axios.get(`https://ecommerse.davidhtml.xyz/products/all?categoryId=${categid}`)
    return res
}

async function getAllCategories() {
    const res = await axios.get("https://ecommerse.davidhtml.xyz/categories/all")
    return res.data
}

async function getCategoryById(catid) {
    const res = await axios.get(`https://ecommerse.davidhtml.xyz/categories/get/${catid}`)
    return res.data
}


export {getAllProducts, getAllCategories, getCategoryById, getProductsByCategory, getProductById}