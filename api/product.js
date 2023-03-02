import { google } from 'googleapis';

import { sheetsToJson } from '@/src/utils/utilities';

export async function getProductList() {
	try {
		const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

		const sheets = google.sheets({ version: 'v4', auth });

		const range = `stock`;

		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.SHEET_ID,
			range,
		});

		const data = sheetsToJson(response.data.values).map(product => ({
			...product,
			price: Number(product.price),
			regularPrice: Number(product.regularPrice),
			images: product.image
		}));
		// console.log('sheetsToJson', data)
		return data
	} catch (e) {
		return {
			error: true, message: 'No se puede acceder a esta info.'
		}
	}
}

// const sheetsToJson = ([keys, ...values]) => values.map(vs => vs.reduce((acc, v, i) => (acc[keys[i]] = v, acc), {}))
// const sheetsToJson = ([keys, ...values]) => values.map(vs => Object.fromEntries(vs.map((v, i) => [keys[i], v.includes('|') ? v.split('|') : v])))