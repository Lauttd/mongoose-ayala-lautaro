import { body } from "express-validator";

export const profileValidation = [
  body("name")
    .notEmpty()
    .withMessage("El name de usuario es requerido")
    .isMongoId()
    .withMessage("Debe ser un name válido de MongoDB"),

  body("edad")
    .optional()
    .isNumeric()
    .withMessage("La edad debe ser un numero")
    .trim(),

  body("pais")
    .optional()
    .isString()
    .withMessage(
      "El pais debe ser un string"
    ),

  body("description")
    .optional()
    .isString()
    .withMessage("La description debe ser un string"),

];
