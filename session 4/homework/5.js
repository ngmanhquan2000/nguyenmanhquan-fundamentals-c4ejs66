//5.1
let Providers = ["tgdd","VhStore","Phukienzero","Dientuccc","Ddghn"]
let Phone = 
[
    {
        "name":"Xiaomi portablecharger 20000mah brand",
        "brand":"Xiaomi",
        "price":428,
        "color":"White",
        "category":"Charger",
        "Providers":[Providers[3],Providers[0]]

    },
    {
        "name":"VSmart Active 1",
        "brand":"VSmart",
        "price":5487,
        "color":"Black",
        "category":"Phone",
        "Providers":[Providers[0],Providers[4],Providers[1]]
    },
    {
        "name":"IPhone X",
        "brand":"Apple",
        "price":21490,
        "color":"Gray",
        "category":"Phone",
        "Providers":Providers[0]
    },
    {
        "name":"Samsung Galaxy A9",
        "brand":"Samsung",
        "price":8490,
        "color":"Blue",
        "category":"Phone",
        "Providers":Providers[0]
    }
]

for ( let i = 0 ; i < 4 ; i++)
{
    console.log("#"+(i+1)+ ". Name: "+ Phone[i].name)
    console.log("   Price: "+ Phone[i].price)
    console.log("------------------------------------------")
}
// 5.2 
let search = prompt("Enter product position: ")
console.log(Phone[search-1])
// 5.3
// const showPrompt = () =>
// {
//     let category = prompt("Enter your category?").toLowerCase()
//     switch(category)
//     {
//         case "charge":
//             console.log("#1. Name: "+ Phone[0].name)
//             console.log("   Price: "+ Phone[0].price)
//             console.log("------------------------------------------")
//             showPrompt()
//             break
//         case "phone":
//             for ( let i = 1 ; i < 4 ; i++)
//             {
//                 console.log("#"+(i)+ ". Name: "+ Phone[i].name)
//                 console.log("   Price: "+ Phone[i].price)
//                 console.log("------------------------------------------")
//             }
//             showPrompt()
//             break
//     }
// }
// showPrompt()

// 5.4 5.5 
for ( let i = 0 ; i < 4 ; i++)
{
    console.log("#"+(i+1)+ ". Name: "+ Phone[i].name)
    console.log("   Price: "+ Phone[i].price)
    console.log("   Providers: "+ Phone[i].Providers)
    console.log("------------------------------------------")
}

