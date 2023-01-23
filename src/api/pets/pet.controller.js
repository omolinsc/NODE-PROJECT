const Pet = require("./pet.model");

const indexGet = async (req, res, next) => {
    try {
        const pets = await Pet.find().populate("owner");
        return res.status(200).json(pets);
    } catch(error) {
        return next(error);
    }
};
const getById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const found = await Pet.findById(id).populate("owner");
        return res.status(200).json(found);
    } catch(error) {
        return next(error);
    }
};

const getByOwner = async (req, res, next) => {
        try {
            const {owner} = req.params;
            const found = await Pet.find({owner:owner}).populate("owner");
            return res.status(200).json(found);
        } catch(error) {
            return next(error);
        }
    };

const getByName = async (req, res, next) => {
    try {
        const {name} = req.params;
        const found = await Pet.find({name:name}).populate("owner");
        return res.status(200).json(found);
    } catch(error) {
        return next(error);
    }
};

// //! pendiente implementar
// const getByCenter = async (req, res, next) => {
//     try {
//         const {center} = req.params;
//         const found = await Pet.find(center.id).populate("center");
//         return res.status(200).json(found);
//     } catch(error) {
//         return next(error);
//     }
// };

const createPost = async (req, res, next) => {
    try {
        const petToCreate = new Pet(req.body);
        const created = await petToCreate.save();
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
        const edited = await Pet.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);
    } catch(error) {
        return next(error);
    }
};
const deletePet = async (req, res, next) => {
    try {
        const {id} = req.params;
        const deleted = await Pet.deleteOne({_id:id});
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
    getByOwner,
    // getByCenter,
    createPost,
    editPut,
    deletePet,
};