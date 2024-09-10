import { beforeAll, beforeEach, afterAll } from "vitest";
import mongoose from "mongoose";

import db from "../src/lib/db";

// Verificar que se está usando una base de datos de test
function checkIsTestDB() {
  const DB_NAME = process.env.DB_NAME;

  if (!DB_NAME.includes("test")) {
    throw new Error("You are not using a test database");
  }
}

// Conectar a la base de datos antes de correr cualquier test
beforeAll(async () => {
  checkIsTestDB();
  await db.connect();
});

// Limpiar la base de datos antes de cada test
beforeEach(async () => {
  checkIsTestDB();
  await mongoose.connection.db.dropDatabase();
});

afterAll(async () => {
  await mongoose.connection.close();
});
