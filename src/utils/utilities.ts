const parseCurrency = (value: number): String => value.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })

const sheetsToJson = ([keys, ...values]: string[][]): Array<{}> => values.map(vs => Object.fromEntries(vs.map((v, i) => [keys[i], v.includes('|') ? v.split('|') : v])))

export { parseCurrency, sheetsToJson }