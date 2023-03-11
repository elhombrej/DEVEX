const { Router } = require('express');
const router = Router();
const mercadopago = require('mercadopago');

// Configuramos el SDK de Mercado Pago con tu access token
mercadopago.configure({
	access_token: process.env.PROD_ACCESS_TOKEN
});

// Ruta para crear preferencias
router.post('/', async (req, res) => {

	let preference = {
		items: [
			{
				title: 'producto de prueba',
				unit_price: 10,
				quantity: 1,
			}
		],
		back_urls: {
			"success": process.env.FRONT_URL,
			"failure": process.env.FRONT_URL,
			"pending": process.env.FRONT_URL
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			console.log(response.body.id)
			return res.json({
				id: response.body.id,
			});
		}).catch(function (error) {
			console.log(error);
		});
});

module.exports = router;


// {
//     "items": [
//         {
//             "title": "Producto de prueba",
//             "quantity": 1,
//             "currency_id": "ARS",
//             "unit_price": 100
//         }
//     ],
//     "back_urls": {
//         "success": "http://localhost:3000/success",
//         "failure": "http://localhost:3000/failure",
//         "pending": "http://localhost:3000/pending"
//     },
//     "auto_return": "approved"
// }