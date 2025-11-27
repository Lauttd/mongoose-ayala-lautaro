import { body } from "express-validator";

export const gamesValidations = [
  body("nombre")
  .trim()
  .isString()
  .withMessage("El nombre debe ser un string"),

  body("categoria")
  .trim()
  .isString()
  .withMessage("La catgeoria debe ser un string"),

    body("genero")
  .trim()
  .isString()
  .withMessage("El genero debe ser un string"),

    body("multiplayer")
  .optional()
  .trim()
  .isString()
  .withMessage("El multiplayer debe ser un string"),

    body("premiaciones")
  .optional()
  .trim()
  .isString()
  .withMessage("El nombre debe ser un string"),

    body("año")
  .trim()
  .isNumeric()
  .withMessage("El año debe ser un number")
];
