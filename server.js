const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./models/user");
const app = express();
require("dotenv").config({ path: "./config/.env" });

app.use(express.json());

connectDB();

//create all users
app.post("/users/add", async (req, res) => {
  const { fullName, email, phone } = req.body;
  const newUser = new user({
    fullName,
    email,
    phone,
  });
  try {
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    res.send("post error");
  }
});
//get all users
app.get("/users/get", async(req,res)=> {
try {
    const users = await user.find()
    res.send(users)
} catch (error) {
    alert("get error")
}
})
//Edit user by id
app.put("/users/update/:id", async (req, res) => {
    try {
      let editedUser = await user.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
      );
      res.send(editedUser);
    } catch (error) {
      res.send("update user error (put)");
    }
  });
  //Delete user by id
  app.delete("/users/delete/:id", async(req,res) => {
try {
    await user.findByIdAndDelete(req.params.id)
    res.send("delete succesfuly")
    
} catch (error) {
    alert ("delete error")
    
}


  })

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on ${PORT}`)
);
