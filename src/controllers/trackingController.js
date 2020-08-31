const { rastrearEncomendas } = require("correios-brasil");

async function get(req, res) {
  try {
    const trackingNumber = req.params.number;

    let numberList = [];

    numberList.push(trackingNumber);

    await rastrearEncomendas(numberList).then((response) => {
      if (response[0].length == 0) {
        return res.status(500).json({ err: "Código não encontrado" });
      }
      return res.json(response);
    });
  } catch (err) {
    if (err) throw err.message;
  }
}

module.exports = { get };
