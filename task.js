function parseCount(value) {
  let value2;
  value2 = Number.parseInt(value);
  if ( isNaN(value2)) {
      throw new Error("Невалидное значение")
  }
return value2;

    
}

function validateCount(value) {
    try { 
        let value3 = parseCount(value)
        return value3 
    }
    catch (error){ 
        return error;
    }
     
} 


 class Triangle {
     constructor (a, b , c){
        this.a = a;
        this.b = b;
        this.c = c;
     
if ( ((this.a + this.b) < this.c) || ((this.b + this.c) < this.a) || ((this.a + this.c) < this.b)) {
  throw new Error("Треугольник с такими сторонами не существует")
    }
}
getPerimeter(p){
   p = this.a + this.b + this.c;
       return p;
}
getArea(s){
      let p2 = (this.a + this.b + this.c) * 0.5;
      s = Math.sqrt(p2 * (p2 - this.a) * (p2 - this.b) * (p2 - this.c)) 
    return parseFloat(s.toFixed(3))
    }
 }
function getTriangle(a,b,c){
       try { 
           return new Triangle(a,b,c);
           }
  catch(e) { return {
    getArea(){
      return "Ошибка! Треугольник не существует"
    },
    getPerimeter(){
      return "Ошибка! Треугольник не существует"
    }
  } 
  }
}

