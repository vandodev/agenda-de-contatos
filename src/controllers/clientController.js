const Client = require("../models/Client");

module.exports = {
  async store(req, res) {
    const { email, nome, rua, numero, bairro, cep, cidade, uf } = req.body;
    const emailExist = await Client.findOne({ email });
    if (emailExist) {
      return res.json({ erro: "Este email já esta cadastrado" });
    }
    const client = await Client.create({
      email,
      nome,
      rua,
      numero,
      bairro,
      cep,
      cidade,
      uf,
    });
    return res.json(client);
  },
  async index(rec, res) {},
  async update(rec, res) {},
  async delete(rec, res) {},
};
