const Dev = require('../model/Dev');

module.exports = {
    async store(req, res) {
        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targedDev){
            return res.status(400).json({ error: 'Dev not exists'});
        };

        if (targedDev.likes.includes(loggedDev._id)){
            console.log ('DEU MATCH');
        };
        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();
    }
};