const {Schema, model } = require ('mongoose');

const DevSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    user: {
        type: String,
        required:true,
    },
    bio: {
        type: String,
        required: false,
    },
    avatar:{
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true,
}
);

//Após criar o Schema é necessário exportá-lo
//module.exports = model ('Parametro', Nome do Schema criado)
module.exports = model ('Dev' , DevSchema );