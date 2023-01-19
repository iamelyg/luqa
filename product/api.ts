import axios from 'axios';
import Papa from 'papaparse';

import { Product } from './types';

export default {
    list: async (): Promise<Product[]> => {
        return axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vRSziis5p9IykazYt8zOeEjTyKLYXgma0fu-BhrWG4TVqVRhq3OSfd6BYJR4K76aY60BP9PY5qYZeYu/pub?output=csv',
            { responseType: 'blob' })
            .then(response => {
                return new Promise<Product[]>((resolve, reject) => {
                    Papa.parse(response.data, {
                        header: true,
                        complete: results => {
                            console.log('RESPONSE DATA', results.data);
                            const products = results.data as Product[];

                            return resolve(products.map(product => ({ ...product, price:  Number(product.price)})));
                        },
                        error: error => {
                            return reject(error.message);
                        }
                    })
                })
            });
    },
}
