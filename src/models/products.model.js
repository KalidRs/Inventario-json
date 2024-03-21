import { Schema, model } from "mongoose";

const productSchema = new Schema({
    barcode: {
        type: String,
        unique: true,
        required: true
    },
    productDescription: String,
    quantity: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('product', productSchema);
