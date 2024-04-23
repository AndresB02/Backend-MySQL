import express from "express";
import {
  addReservation,
  showReservation,
  findReservation,
  modificateReservation,
  deleteReservation,
} from "../controllers/reservationControllers.js";

const ticket = express.Router();

ticket.post("/", addReservation);
ticket.get("/", showReservation);
ticket.get("/:id", findReservation);
ticket.put("/:id", modificateReservation);
ticket.delete("/:id", deleteReservation);

export default ticket;
