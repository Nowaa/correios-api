const { rastrearEncomendas } = require("correios-brasil");

async function get(req, res) {
  try {
    const trackingNumber = req.params.number;

    let numberList = [];

    //trackingNumber = 'LB363051775SE';
    numberList.push(trackingNumber);

    await rastrearEncomendas(numberList).then((response) => {
      return res.json(response);
    });
  } catch (err) {
    if (err) throw err.message;
  }
}

module.exports = { get };
