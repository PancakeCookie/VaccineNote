const user = require("../../models/user");
const jwtModule = require("../../modules/jwtModule");

const authController = {
  signUp: async (req, res) => {
    const { email, password, nickName } = req.body;
    console.log(email);
    const findResult = await user.findOne({ email });
    const findResult2 = await user.findOne({ nickName });
    if (findResult == null && findResult2 == null) {
      // if 조건 체크하면 user 생성
      const userModel = new user({
        email,
        password,
        nickName,
      });
      try {
        const savedUser = await userModel.save();
        console.log(savedUser);
        return res.status(200).json({
          message: "유저 생성 성공",
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      return res.status(400).json({
        message: "중복된 아이디 존재",
      });
    }
  },

  signIn: async (req, res) => {
    const { email, password } = req.body;
    try {
      const result = await user.findOne({ email, password });
      if (result) {
        const payload = {
          email: result.email,
          verified: result.verified,
        };

        const token = jwtModule.create(payload);
        console.log(token);

        return res.status(200).json({
          message: "로그인 성공",
          accessToken: token,
        });
      } else {
        return res.status(401).json({
          message: "로그인 실패",
        });
      }
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message: "DB 에러",
        error: error,
      });
    }
  },
};

module.exports = authController;
