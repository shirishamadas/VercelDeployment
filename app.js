const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// Swagger UI endpoint
app.use("/api/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// GET endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello Ponnu!!🥰" });
});

// POST endpoint
app.post("/api/echo", (req, res) => {
  const data = req.body;
  res.json({ received: data });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
