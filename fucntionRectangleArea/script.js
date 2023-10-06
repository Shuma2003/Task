function calculateRectangleAre(width, length){
    if (length <= 0 || width <= 0 ){
        return "Длина и ширина прямоугольника должны быть положительными числами!";
    }
    return length * width
}
calculateRectangleAre()
console.log(calculateRectangleAre);