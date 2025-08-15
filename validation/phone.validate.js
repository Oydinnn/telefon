import joi from 'joi';

const phoneSchema = joi.object({
  name: joi.string().min(2).max(50).required(),
  price: joi.number().positive().required(),
  brand_id: joi.number().integer().required(),
  model_id: joi.number().integer().required(),
  color: joi.string().valid('black','white', 'gold', 'blue').required(),
  display: joi.number().required(),
  ram: joi.string().required(),
  memory: joi.string().required(),
});



