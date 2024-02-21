const Crud = require('../model/crudModel')
const mongoose= require('mongoose')


const postCrud = async(req,res)=>{


    const newCrud = await Crud.create(req.body);

    res.status(201).json({
        status: 'success',
        data: { tour: newCrud }
    });


}

const getCrud = async(req,res)=>{
  try {
      const crud = await Crud.find();
      res.status(200).json(crud);
  } catch (error) {
      res.status(404).json({ error: error.message });
  }
}


const deleteCrud = async (req, res) => {
  try {
    const id = req.param('id'); 

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such task' });
    }

    const crud = await Crud.findOneAndDelete({ _id: id });

    if (!crud) {
      return res.status(404).json({ error: 'No such task' });
    }

    res.status(200).json({ message: 'Crud item deleted successfully' });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Internal server error' }); 
  }
};

  





const updateCrud = async (req, res) => {
  try {
    const id = req.param('id'); 
    const updateData = req.body; 

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: 'No update data provided' });
    }

    const updatedCrud = await Crud.findByIdAndUpdate(
      id,
      updateData,
      { new: true } 
    );

    if (!updatedCrud) {
      return res.status(404).json({ error: 'Crud item not found' });
    }

    if (updatedCrud.errors) {
      const Errors = [];
      for (const error in updatedCrud.errors) {
        Errors.push(error.message);
      }
      return res.status(400).json({ error: 'Validation errors:', Errors });
    }

    res.status(200).json({ message: 'Crud item updated successfully', updatedCrud });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Internal server error' }); 
  }
};



module.exports = {
    postCrud,
    getCrud,
    deleteCrud,
    updateCrud
}



