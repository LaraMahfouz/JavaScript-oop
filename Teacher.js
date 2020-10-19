class Teacher extends Student{
    constructor(Id,name,Email,mobile_number,Salary,subjects){
        super(Id,name,Email,mobile_number); 
        this.Salary = Salary;
        this.subjects = subjects;
    }
    Salary(){ 
        return (salary)  ;
    }
    Subjects(){ 
        return (subjects)  ;
    }

}
let teacher1 = new Teacher(" 96432" ,"Sadi", "Sadi@orange.com"  ,0777788888 , 800 ,  "[English, Arabic, Math, science]" );
console.log(teacher1);
console.log(teacher1.Salary);
console.log(teacher1.subjects);
