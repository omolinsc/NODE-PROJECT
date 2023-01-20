const Owner = require("./owner.model");

const indexGet = async (req, res, next) => {
    try {
        const owners = await Owner.find();
        return res.status(200).json(owners);
    } catch(error) {
        return next(error);
    }
};
const getById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const found = await Owner.findById(id);
        return res.status(200).json(found);
    } catch(error) {
        return next(error);
    }
};

const getByName = async (req, res, next) => {
    try {
        const {name} = req.params;
        const found = await Owner.find({name:name});
        return res.status(200).json(found);
    } catch(error) {
        return next(error);
    }
};

const createPost = async (req, res, next) => {
    try {
        const ownerToCreate = new Owner(req.body);
        const created = await ownerToCreate.save();
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
        const edited = await Owner.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);
    } catch(error) {
        return next(error);
    }
};

const deleteOwner = async (req, res, next) => {
    try {
        const {id} = req.params;
        const deleted = await Owner.deleteOne({_id:id});
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
    deleteOwner,
};