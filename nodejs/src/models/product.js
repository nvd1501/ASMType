import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: Number,
    image: String,
    description: String,
    categoryID: {
        type: mongoose.Types.ObjectId,
        ref: "Categoty",
    }
},
{ timestamps: true, versionKey: false }
);

productSchema.plugin(mongoosePaginate)

export default mongoose.model("Product", productSchema);
