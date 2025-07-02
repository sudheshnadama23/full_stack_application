const { Submission } = require('../models');

exports.getAll = async (req, res) => {
  const submissions = await Submission.findAll();

  res.json(submissions);
};

exports.getById = async (req, res) => {
  const entry = await Submission.findByPk(req.params.id);
  if (!entry) return res.status(404).send('Not found');
  res.json(entry);
};

exports.create = async (req, res) => {
  try {
    const newEntry = await Submission.create(req.body);
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  const entry = await Submission.findByPk(req.params.id);
  if (!entry) return res.status(404).send('Not found');
  await entry.update(req.body);
  res.json(entry);
};

exports.remove = async (req, res) => {
  const entry = await Submission.findByPk(req.params.id);
  if (!entry) return res.status(404).send('Not found');
  await entry.destroy();
  res.sendStatus(204);
};