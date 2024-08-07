const user = [];
module.exports = {
  create: (req, res) => {
    try {
       newUser = {...req.body}

       user.push(newUser)
      

      return res.send({
        response: newUser
      });
    } catch (error) {
      return res.send({error: error,});
    }
  },
  getAll: (req, res) => {
    try {
      return res.send({
        response: user,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
