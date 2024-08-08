const createError = require("http-errors");

const Koder = require("../models/koder.model");

async function create(data) {
  const newKoder = await Koder.create(data);
  return newKoder;
}

async function getAll() {
  const koders = await Koder.find({});
  return koders;
}

async function getById(id) {
  const koder = await Koder.findById(id);
  return koder;
}

async function updateById(id, newData) {
  const koderFound = await Koder.findById(id);

  if (!koderFound) {
    throw createError(404, "Koder not found");
  }

  const koder = await Koder.findByIdAndUpdate(id, newData, { new: true });
  return koder;
}

async function deleteById(id) {
  const koderFound = await Koder.findById(id);

  if (!koderFound) {
    throw createError(404, "Koder not found");
  }

  const deletedKoder = await Koder.findByIdAndDelete(id);
  return deletedKoder;
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
