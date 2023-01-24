import axios from 'axios';
import Papa from 'papaparse';

import { Product } from './types';
import { INFORMATION } from '@/app/constants';

export default {
    list: async (): Promise<Product[]> => {
        return axios.get(INFORMATION.sheet,
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
