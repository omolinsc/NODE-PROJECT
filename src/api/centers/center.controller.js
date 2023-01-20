const Center = require("./center.model");

const indexGet = async (req, res, next) => {
    try {
        const centers = await Center.find();
        return res.status(200).json(centers);
    } catch(error) {
        return next(error);
    }
};
const getById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const found = await Center.findById(id);
        return res.status(200).json(found);
    } catch(error) {
        return next(error);
    }
};

const getByName = async (req, res, next) => {
    try {
        const {name} = req.params;
        const found = await Center.find({name:name});
        return res.status(200).json(found);
    } catch(error) {
        return next(error);
    }
};

const createPost = async (req, res, next) => {
    try {
        const centerToCreate = new Center(req.body);
        const created = await centerToCreate.save();
        console.log(created)
        return res.status(201).json(created);
    } catch(error) {
        return next(error);
    }
};

const editPut = async (req, res, next) => {
    try {
        const {id} = req.params;
        const fields = {...req.body};
        const options = {new: true};
        const edited = await Center.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);
    } catch(error) {
        return next(error);
    }
};

const deleteCenter = async (req, res, next) => {
    try {
        const {id} = req.params;
        const deleted = await Center.deleteOne({_id:id});
        if (deleted.deletedCount) {
            return res.status(200).json("[DELETE] Elemento eliminado")
        } else {
            return res.status(200).json("[NOT FOUND : DELETE] No encontrado")
        }
    } catch(error) {
        return next(error);
    }
};


module.exports = {
    indexGet,
    getById,
    getByName,
    createPost,
    editPut,
    deleteCenter,
};