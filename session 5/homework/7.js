
const remove_dollar_sign = (string) =>
{
    return string.replace('$',"")
}

string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
if (string_with_no_dollars == "80% percent of life is to show up"){
    console.log("Your function is correct")}
else{
    console.log("Oops, there's a bug")}

console.log(string_with_no_dollars)
