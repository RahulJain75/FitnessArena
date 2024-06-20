const express = require('express');
const router = express.Router();
const trainerController = require("../controller/trainerController");


router.post("/trainerLogin", async (req, res) => {
    let result = await trainerController.login(req)
    console.log({ result })
    if (result === "Trainer not exist" || result === "password incorrect") {
        return res.status(500).json({ "message": result });
    }
    return res.send(result)
})


router.post("/trainerSignup", async (req, res) => {
    console.log(req.body, 'kk123');
    let result = await trainerController.signup(req)
    return res.status(200).json({ "message": result });
});

router.post("/trainerForget", async (req, res) => {
    let result = await trainerController.forget(req)
    if (result === "email does not exist") {
        return res.status(500).json({ "message": result })
    }
    console.log({ result })
    return res.send(result)
})

router.post("/trainerUpdatePassword", async (req, res) => {
    let result = await trainerController.updatePassword(req)
    if(result === "email does not exist"){
        return res.status(500).json({"message": result})
      }
      else if(result === "OTP does not match"){
        return res.status(500).json({"message": result})
      }
    console.log({ result })
    return res.send(result)
})

module.exports = router;