import { google } from 'googleapis';

export async function getProductList() {
    try {
        const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

        const sheets = google.sheets({ version: 'v4', auth });

        const range = `stock!A1:I5`;

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SHEET_ID,
            range,
        });

        const data = sheetsToJson(response.data.values).map(product => ({
            ...product,
            price: Number(product.price),
            regularPrice: Number(product.regularPrice)
        }));
        console.log('sheetsToJson', data)
        return {
            success: true,
            data,
        }
    } catch (e) {
        return {
            success: false, message: 'No se puede acceder a esta info.'
        }
    }
}

const sheetsToJson = ([keys, ...values]) => values.map(vs => vs.reduce((acc, v, i) => (acc[keys[i]] = v, acc), {}))