const { rastrearEncomendas } = require('correios-brasil')

async function get(req, res){
    try{
        const { trackingNumber } = req.body;

        let numberList = [];

        numberList.push(trackingNumber);

        await rastrearEncomendas(numberList).then((response) => {
            return res.json(response);
        });
    } catch(err){
        if (err) throw err.message
    }
}

module.exports = { get }