import { body } from "express-validator";

export const tagValidation = [
  body("name")
    .notEmpty()
    .withMessage("El título es requerido")
    .isLength({ min: 3 })
    .withMessage("El título debe tener al menos 3 caracteres")
    .isLength({ max: 100 })
    .withMessage("El título no puede exceder los 100 caracteres")
    .trim(),
];
