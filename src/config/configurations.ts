export let PETSHOP_API = 'http://210.123.254.17'

if (__DEV__) {
 PETSHOP_API = PETSHOP_API + ':9042'
}else {
 PETSHOP_API = PETSHOP_API + ':9043'
}

