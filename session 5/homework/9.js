let list = [1, 2, 5, 9, -10, 6]
let newlist = []

const get_even_list = () =>
{
        for ( let i = 0 ; i < list.length ; i ++)
    {
        if (list[i] % 2 == 0 )
        {
            newlist.push(list[i])
        }
    }
    return newlist
}
get_even_list()
console.log(newlist)

if (JSON.stringify(newlist) == JSON.stringify([2, -10, 6])){
    print("Your function is correct")}
else{
    console.log("Ooops, bugs detected")}
