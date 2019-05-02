export default function numFormatter(num) {
    // return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    // return parseInt(num).toLocaleString('de-DE', { style: 'currency', currency: 'VND' })
    return  parseInt(num).toLocaleString('de-DE')
}
//this function is to format the number 
//for example 100.000.000