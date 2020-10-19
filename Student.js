class Student {
    constructor(Id,name,Email,mobile_number) {
        this.Id = Id;
        this.name = name;
        this.Email = Email;
        this.mobile_number = mobile_number;
    }
    name(){ 
        return 'Name: ' + name  ;
    }
    number(){
        return (mobile_number);
    }
}
let Student1 = new Student(123443 ,"Sara", "sara@orange.com"  ,0777777777);
console.log(Student1);
console.log(Student1.name);
console.log(Student1.mobile_number);
