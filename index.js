import express from "express";
import cors from "cors";
import connectDataBase from "./config/config.js";
import reservationRoutes from "./routes/reservationRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/reservations", reservationRoutes);

try {
  await connectDataBase.authenticate();
  console.log("La conexión a la Base de Datos es exitosa");
} catch (error) {
  console.error("Error en la conexión a la Base de Datos");
}

app.get("/", (req, res) => {
  res.send("Bienvenido, puede hacer su reserva");
});

app.listen(5000, () => {
  console.log(
    "El servidor se esta ejecutando en el puerto http://localhost:5000"
  );
});
