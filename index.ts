

//                                                                       loop                                                                  //

// for(let counter = 0; counter <= 1; counter++ ) {
    
//     function name2(yourName) {
//         // console.log(yourName)
        
//     }

//     name2("a")
    
// }
                                                               























/////////////////////////                                                  MASAHAT                                  ///////////////////////////////
// function masahat(shoa) {
//     const p = 3.14
//     let cal = (shoa*shoa)*p 
//     return cal;
// }
// let b = masahat(20)
//  console.log(b)
















//                                                            masahatMoraba                                                          //  
// function masahatMoraba(tool: number , arz: number): number {
//    return tool *arz;
// }

// let a3 = masahatMoraba(10 , 5)

// console.log(a3)























//                                                                       mohit dayere                                                                //
// function mohitDayere(shoa: number) {
//     const p = 3.14
//      return (shoa*2)*p
// }

// let a2 = mohitDayere(10)

// console.log(a2)








function add_to_cart(cala) {
    const folanChis = cala
    return folanChis;
}
let afzoodCala = add_to_cart("goshi") // KALA HAYE MOJOOD
console.log(afzoodCala)


for(let counter = 0; counter<1; counter++ ) {
    console.log("____________________" + "________________________")
}


const mokhataban = [
    {
        name: "abas",
        number: 1
    },
    {
        name: "ali",
        number:2
    },
    {
        name: "mojtaba",
        number:3
    }
]
console.log("numbe r=" + mokhataban[0].number)
console.log("name " + mokhataban[0].name)

for(let counter = 0; counter<1; counter++) {
    console.log("____________________" + "______________________")
}

console.log("number =" + mokhataban[1].number)
console.log("name " + mokhataban[1].name)

for(let counter = 0; counter<1; counter++) {
    console.log("____________________" + "______________________")
}

console.log("number =" + mokhataban[2].number)
console.log("name " + mokhataban[2].name)

for(let counter = 0; counter<1; counter++) {
    console.log("____________________" + "______________________")
}




let searchName = "ali"


// if( mokhataban[0].name  === searchName) {
//     console.log("peida shod")
// }else{
//     console.log("peidat nakardam")
// }

switch(searchName){
    case mokhataban[0].name :
        console.log('peida shod')
    break;

    case mokhataban[1].name :
        console.log('peida shod')
    break;

    case mokhataban[2].name :
        console.log('peida shod')
    break;
    default:
     console.log('peida nashod dadash')
}
