async function registerUser(req, res) {
    let data = req.body;
    console.log(data);
    res.send("success ok");
}

const authController = {registerUser}

export default authController;