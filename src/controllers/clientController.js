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
  async index(req, res) {
    const clients = await Client.find();
    return res.json(clients);
  },
  async update(req, res) {
    const { id } = req.params;
    const { email, nome, rua, numero, bairro, cep, cidade, uf } = req.body;
    const client = await Client.findByIdAndUpdate(
      id,
      {
        email,
        nome,
        rua,
        numero,
        bairro,
        cep,
        cidade,
        uf,
      },
      { new: true } //new true serve para retornar atualizado, se não colocar retorna o antigo
    );
    return res.json(client);
  },
  async delete(rec, res) {},
};
