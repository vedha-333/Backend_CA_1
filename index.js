import express from "express";

const app = express();
const PORT = 4000;

app.use(express.json());

app.post("sign_up", (req, res) => {
  try {
    const { username, password, email, dateOfBirth } = req.body;
    if (!username || username.trim() === "") {
      return res.status(400).json({ message: "Username cannot be empty" });
    }

    if (!password || password.length < 8 || password.length > 16) {
      return res
        .status(400)
        .json({
          message:
            "Password length should be greater than 8 and less than or equal to 16",
        });
    }

    if (!email || email.trim() === "") {
      return res.status(400).json({ message: "Email cannot be empty" });
    }

    res
      .status(201)
      .json({
        message: "Sign up Successfully",
        user: { username, email, dateOfBirth },
      });
  } catch (error) {
    console.error("Unexpected error", error);
    res.status(500).json({ message: "Internal Server error" });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
