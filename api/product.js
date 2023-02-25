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

        console.log('RESPOSNE', response.data)

        const [title, content] = response.data.values[0];
        console.log(title, content)

        return {
            props: {
                title,
                content
            }
        }
    } catch (e) {
        return {
            props: {
                error: true, message: 'No se puede acceder a esta info.'
            }
        }
    }
}