import connectDataBase from "../config/config.js";
import { DataTypes } from "sequelize";

const Reservations = connectDataBase.define("reservations", {
  nombre_cliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo_reserva: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cantidad_personas: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hora: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
});

export default Reservations;
