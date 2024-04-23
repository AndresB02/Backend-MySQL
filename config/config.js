import { Sequelize } from "sequelize";

const connectDataBase = new Sequelize("reservationDataBase", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

export default connectDataBase;
