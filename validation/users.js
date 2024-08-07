const Joi = require("joi");

module.exports = {
  createUserSchema: async (req, res, next) => {
    const createUser = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string()
          .min(6)
          .max(18)
          .required()
          .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
      });
      try {
        const validate = await createUser.validateAsync(req.body);
        next();
      } catch (error) {
        return res.send({
          error: error,
        });
      }
    
  },
};


// const Joi = require("joi");

// const createUserSchema = Joi.object({
//   username: Joi.string().min(3).max(30).required(),
//   password: Joi.string()
//     .min(6)
//     .max(18)
//     .required()
//     .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
// });

// module.exports = {
//   createUserSchema: async (req, res, next) => {
//     try {
//      const validate =  await createUserSchema.validateAsync(req.body);
//       next();
//     } catch (error) {
//       return res.send({error:error});
//     }
//   },
// };

