let SheepSize = [5,7,300,90,24,50,75]

console.log("Day la dan cuu cua toi")
console.log(...SheepSize)


console.log("Now my biggest sheep has size "+ Math.max(...SheepSize)+", let's shave it")
SheepSize[SheepSize.indexOf(Math.max(...SheepSize))]=8

console.log("Day la dan cuu cua toi sau khi cat toc")
console.log(...SheepSize)

for ( let i = 1 ; i <= 4 ; i++)
{
    console.log("MONTH "+i)
    console.log("Sau 1 thang toc cua nhung chu cuu lai dai ra va day la size cua chung")
    let a 
    for (let  j = 0; j < SheepSize.length; j++) 
    {
        a = Number(SheepSize[j])
        a = a + 50
        SheepSize[j]=a
    }
    console.log(...SheepSize)
    console.log("Now my biggest sheep has size "+ Math.max(...SheepSize)+", let's shave it")
    SheepSize[SheepSize.indexOf(Math.max(...SheepSize))]=8
    console.log("Day la dan cuu cua toi sau khi cat toc")
    console.log(...SheepSize)
}