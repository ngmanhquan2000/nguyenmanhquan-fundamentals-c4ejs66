let string = prompt("Nhâp vào: ")

const remove_dollar_sign = () =>
{
    return string.replace("$","")
}
console.log(string)
console.log(remove_dollar_sign())