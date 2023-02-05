const parseCurrency = (value: number): String => value.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })

export { parseCurrency }