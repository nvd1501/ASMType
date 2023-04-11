import Joi from "joi";
import Categoty from "../models/category";
import Product from "../models/product"

const categorySchema = Joi.object({
    name: Joi.string().required(),
    
});

export const getAll = async (req, res) => {
    try {
        const data = await Categoty.find();

        if (data.length == 0) {
            return res.json({
                message: "Không có danh mục",
            });
        }
        return res.json(data);
    } catch (error) {}
};
export const get = async (req, res) => {    
    try {
        const id = req.params.id;
        const category = await Categoty.findById({ id });
        if (category.length === 0) {
            return res.status(200).json({
                message: "Không có danh mục",
            });
        }
        const products = await Product.find({categoryId : id})
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = categorySchema.validate(body);
        if (error) {
                 return res.json({
                    message : error.details.map((item) => item.message)
                 })
       
        }
        const data = await Categoty.create(body);
        if (data.length === 0) {
            return res.status(400).json({
                message: "Thêm danh mục thất bại",
            });
        }
        return res.status(200).json({
            message: "Thêm danh mục thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const remove = async (req, res) => {
    try {
        const data = await Categoty.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xóa sản phẩm thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const update = async (req, res) => {
    try {
        const data = await Categoty.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (!data) {
            return res.status(400).json({
                message: "Cập danh mục phẩm thất bại",
            });
        }
        return res.json({
            message: "Cập nhật danh mục thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
