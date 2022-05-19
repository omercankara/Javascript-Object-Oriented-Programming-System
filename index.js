/***************************************************      CONSTRUCTOR     **************************************************************************/


function person (name,student,age){
        this.name=name,
        this.student = student,
        this.age = age
        this.calculateAge = function(x){
                       return x - age
        }    
}

const user1 = new person("Sena","Öğrenci",2001)
//console.log("Sena'nın yaşı " + user1.calculateAge(2022))


/*****************************************************      KALITIM        ****************************************************************************************/



function user(name,maas){
        this.name = name
        this.maas = maas
        
}
user.prototype.calculateSalary = function(){
        var month = new Date().getMonth()+1
        var vergi = 0
        toplammaas = this.maas * month

        if(toplammaas <=20000){
                vergi = toplammaas * 0.2
        } else if(toplammaas > 20000 && toplammaas <=30000){
                vergi  = toplammaas * 0.25
        }else{
                vergi  = toplammaas * 0.3
        }

        return{
                vergisizmaas:toplammaas,
                vergi,              
                kalan:  toplammaas - vergi
        }
}

var emp1 = new user("can",4253)
var emp1_salary = emp1.calculateSalary()
//console.log(emp1_salary)

/*******************************************************    CREATİNG OBJECT ( Object.create)  *********************************************************************/
let personProto = {
        calculateAge:function(){
                return 2018 - this.year        
        }
}

let emel = Object.create(personProto)
emel.name="emel"
emel.year = 1999
//console.log(emel.calculateAge())
//console.log(emel)

let yigit = Object.create(personProto)
yigit.name = 'Yigit',
yigit.year = 2010
//console.log(yigit)
//console.log(yigit.calculateAge())


/***********************************************************Prototype İnheritance Object & Functions  ******************************************************************/

let personal = function(name,year,job){
        this.name = name
        this.year = year
        this.job = job
}

personal.prototype.calculateAge = function(){       //prototype yapısı ile const içinde yeni bir function tanımlanır
        return 2018 - this.year
}



let teacher = function(name,year,job,subject){
        personal.call(this,name,year,job)  //call methodu ile personun constructor özelliklerini (name,year,job) çağır ve teacher objesinin içine aktar
        this.subject = subject
 }

 //inHerit the Personal prototype
 teacher.prototype = Object.create (personal.prototype) //teacherın prototype yapısını personal protosu ile degiştirme işlemi 

//set teacher constructor 
 teacher.prototype.constructor = teacher
 teacher.prototype.greeting = function(){
        return 'hello my darling'
 }

 let ayse = new teacher("Ali",1987,"matematik","deneme ")


 //console.log(ayse)
 //console.log(ayse.greeting())
 //console.log(ayse.calculateAge())



 /*************************************************************  Object & Functions  BUİLT-İN Constructors*****************************************************/


var arr1 = ['Ada','Yigit','Can']

Array.prototype.remove = function(member){
        var index = this.indexOf(member)
        if(index >  -1 ){ //istenen eleman var ise gönderilen elemanı sil
                this.splice(index,1)
        }
        return this // İstenen eleman yoksa olduğu gibi yeniden dönder
}

//console.log(arr1.remove('Ada'))



/***************************************************************İNHERİTANCE EXAMPLE*****************************************************************************/

function personels(name){ //Person Constructor
        this.name = name
}

personels.prototype.Introduce = function(){
        console.log('Hello My name is ' + this.name)
}



//Teacher Constructor
function Teacher(name,branch){
        personels.call(this,name)
        this.branch= branch
}

Teacher.prototype  = Object.create(personels.prototype)
Teacher.prototype.constructor  = Teacher
Teacher.prototype.teach = function(){
        console.log('I Teach' + ' ' +  this.branch)
}



//Student Constructor
function Student(name,number){
        personels.call(this,name)
        this.number = number
}

Student.prototype = Object.create(personels.prototype)
Student.prototype.constructor = Student
Student.prototype.study = function(){
        console.log('My Name İs' + ' ' + this.name + ' ' +  'My Number ' + this.number)
}


//HeadMaster Constructor

function headMaster(name, branch){
        Teacher.call(this,name,branch)
}

headMaster.prototype = Object.create(Teacher.prototype)
headMaster.prototype.constructor = headMaster
headMaster.prototype.shareTask  = function(){
        console.log("Hello Masster Im Share Task Function")
}



let p1 = new personels("Çınar")
p1.Introduce()

let h1 = new headMaster("Admin","Master")
h1.Introduce()
h1.teach()
h1.shareTask()

let t1 = new Teacher(" Ömercan","Math")
t1.teach()
t1.Introduce()

let s1 = new Student("Can",1500)
s1.study()