const { Auths, Users } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
    try {
        res.status(201).json({
            status: "Success",
            data: {},
        });
    } catch (err) {}
};

const login = async (req, res, next) => {
  try {
      const { email, password } = req.body;

      // Find user by email
      const data = await Auths.findOne({
          where: {
              email,
          },
          include: [
              {
                  model: Users,
                  as: "user",
              },
          ],
      });

      if (!data) {
          return res.status(404).json({
              status: "Failed",
              message: "User not found",
              isSuccess: false,
              data: null,
          });
      }
      if (data && bcrypt.compareSync(password, data.password)) {
            const token = jwt.sign(
              {
                id: data.id,
                username: data.user.username,
                email: data.email,
                userId: data.user.id,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: '1d',
              }
            );

          return res.status(200).json({
              status: "Success",
              message: "Berhasil login",
              data: {
                  token,
                  user: data,
              },
          });
      } else {
          return res.status(401).json({
              status: "Failed",
              message: "Username or Password is Invalid",
              isSuccess: false,
              data: null,
          });
      }

  } catch (err) {
      console.error(err);
      res.status(500).json({
          status: "Failed",
          message: err.message,
      });
  }
};
const authenticate = async (req, res) => {
    try {
        res.status(200).json({
            status: "Success",
            data: {
                user: req.user,
            },
        });
    } catch (err) {}
};

module.exports = {
    register,
    login,
    authenticate,
};
