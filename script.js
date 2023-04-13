//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	 getName(){
		 return this.name;
	 }
	setAge(age){
		this.age = age;
	}
}

class Student extends Person {
	constructor(){
        super();
    }
    study(){
        console.log(getName()+" is studying");
    }
}


class Teacher extends Person {
	constructor(){
        super();
    }
    teach(){
        console.log(getName()+" is teaching");
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
