import mongoose from "mongoose";

const bookSchema =  mongoose.Schema({

    name: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    category: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
        // name:String,
        // price:Number,
        // category:String,
        // image:String,
        // title:String,
        
})
const Book = mongoose.model("Book", bookSchema);

export default Book;