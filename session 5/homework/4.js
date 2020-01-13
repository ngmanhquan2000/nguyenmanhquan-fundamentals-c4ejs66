clear()
let x = 100
let y = "red"
const draw_square = () =>
{
    for ( let i = 0 ; i < 4 ; i ++)
    {
      color(y)
      fd(x)
      rt(90)
    }
}
for (let i = 0; i  < 30; i ++){
		draw_square(i * 5, 'red')
	lt(17)
penup()
    	
    	pendown()
}
draw_square()