//Controller recebe as requisições e formulam a resposta
//Esse controller são todas as rotas relacionadas a criação, alteração, deletar e listar os itens
const axios = require('axios');
const Dev = require('../model/Dev');
module.exports = {
//dentro deste objeto estarão todos os métodos e funções desse controle

    async index (req,res){
        const { user } = req.headers;

        const loggedUser = await Dev.findById(user)

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.Likes } },
                { _id: { $nin: loggedDev.Dislikes } },
            ],
        });
    },
    async store(req,res) {
        const {username} = req.body;

        const userExists = await Dev.findOne({ user: username});

        if (userExists){
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar} = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar,
        });

        return res.json (dev);
    },
};