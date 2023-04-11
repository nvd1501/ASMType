import { ICate } from "../types/category";
import instance from "./instance";


const getAllCategori = () => {
    return instance.get('/categories')
}
const deleteCategori = (id: number) => {
    return instance.delete('/categories/' +id)
}
const addCategori = (categori: ICate) => {
    return instance.post('/categories', categori);
}
const updateCategori = (categori: ICate) => {
    return instance.patch('/categories/' + categori.id, categori)
}
export {getAllCategori, deleteCategori, addCategori, updateCategori}