var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com" 
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com>" 
    },
    {
        userName:"Дмитро",
        lastName:"",
        email:"дмитро@gmail.com"  
    },
    {
        userName:"123",
        lastName:"123",
        email:"123123@gmail.com"  
    },
    {
        userName:"variant",
        lastName:"@",
        email:"@variant@gmail.com" 
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];




var re = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com$/;
var valid = [];
for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i].email)) {
        valid.push(arr[i].email);
    }
}

console.log(valid);