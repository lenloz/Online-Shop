const mongoose = require("mongoose");

/**
 * @swagger
 *  components:
 *   schemas:
 *    Product:
 *     type: object
 *     required:
 *      - name
 *      - price
 *      - description
 *     properties:
 *      name:
 *       type: String
 *       maxlength: 100
 *      price:
 *       type: Number
 *      description:
 *       type: String
 *       maxlength: 300
 *      created:
 *       type: Date
 *       default : Date.now()
 */
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            minlength: 5,
            maxlength: 200,
        },
        price: {
            type: Number,
            require: true,
        },
        description: {
            type: String,
            require: true,
            minlength: 5,
            maxlength: 500,
        },
        image: {
            data: {
                type: Buffer,
                require: true,
            },
            contentType: {
                type: String,
                require: true,
            },
        },
        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review",
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Product", productSchema);
