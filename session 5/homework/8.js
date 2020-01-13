let list = [1,4,5,-1,10]
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