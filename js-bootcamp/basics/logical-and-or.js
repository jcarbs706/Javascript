let temp = 55

if (temp >= 60 && temp <= 90){
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120){
    console.log('Do not go outside')
} else {
    console.log('Eh. Do what you want')
}

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan === true && isGuestTwoVegan === true) {
    console.log('Offer these guests vegan options only')
} else if (isGuestOneVegan == false && isGuestTwoVegan === false) {
    console.log('Offer these guests anything on the menu')
} else {
    console.log('Offer these guests both vegan and regular options only')
}