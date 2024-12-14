import axios from "axios";

async function getAllProducts() {
    const res = await axios.get(`https://ecommerse.apasni.me/products/all?limit=102`)
    return res.data
}

async function getProductsByCategory(categid) {
    const res = await axios.get(`https://ecommerse.apasni.me/products/all?categoryId=${categid}`)
    return res
}

async function getProductsBySubcategory(subid) {
    const res = await axios.get(`https://ecommerse.apasni.me/products/all?subCategoryId=${subid}`)
    return res.data
}

async function getAllCategories() {
    const res = await axios.get("https://ecommerse.apasni.me/categories/all")
    return res.data
}

async function getCategoryById(catid) {
    const res = await axios.get(`https://ecommerse.apasni.me/categories/get/${catid}`)
    return res.data
}


export {getAllProducts, getAllCategories, getCategoryById, getProductsByCategory,getProductsBySubcategory}