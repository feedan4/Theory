import axios from "axios";

async function getAllData() {
    const res = await axios.get(`https://ecommerse.apasni.me/products/all`)
    return res
}

async function getAllProducts() {
    const res = await axios.get(`https://ecommerse.apasni.me/products/all?limit=102`)
    return res.data 
}

async function getProductsByCategory() {
    const res = await axios.get(`https://ecommerse.apasni.me/products/all?categoryId`)
    return res
}

async function getAllCategories() {
    const res = await axios.get("https://ecommerse.apasni.me/categories/all")
    return res.data
}

async function getCategoryById(catid) {
    const res = await axios.get(`https://ecommerse.apasni.me/categories/get/${catid}`)
    return res.data
}


export {getAllData, getAllProducts, getAllCategories, getCategoryById, getProductsByCategory}