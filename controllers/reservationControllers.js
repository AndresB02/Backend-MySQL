import Reservations from "../models/Reservations.js";

/* funcion para crear todas las reservas que se requieram */
export const addReservation = async (req, res) => {
  try {
    await Reservations.create(req.body);
    res.json({ msg: "La reserva se creo con éxito" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

/* funcion para mostrar todas las reservas que se lleguen a crear */
export const showReservation = async (req, res) => {
  try {
    const reservations = await Reservations.findAll();
    res.json(reservations);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

/* funcion/metodo para mostrar una reserva por id */
export const findReservation = async (req, res) => {
  try {
    const reservations = await Reservations.findAll({
      where: { id: req.params.id },
    });
    res.json(reservations[0]);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

/* funcion/metodo para mostrar una reservacion por id */
export const modificateReservation = async (req, res) => {
  try {
    await Reservations.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ msg: "Se modifico su reservación" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

/* funcion/metodo para eliminar una reservaci+on por id */
export const deleteReservation = async (req, res) => {
  try {
    await Reservations.destroy({
      where: { id: req.params.id },
    });
    res.json({ msg: "Se elimino su reserva" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};
