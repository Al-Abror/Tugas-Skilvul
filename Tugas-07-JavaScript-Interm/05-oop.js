// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
//// 1) menampilkan 'fun1' dan objek didalam variabel obj
//// 2) menampilkan 'fun2' dan objek kosong
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
//// Tidak
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
//// karena pada fun2, belum mendefinisikan arrow functionnya 
// output :
// fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
// fun2 {}
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
};
  
obj.fun1();
obj.fun2();



///2
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
//// Encapsulation adalah cara untuk membatasi akses langsung ke properti atau method dari sebuah objek.
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
//// Abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu dari sebuah 
//// objek/method dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
//// Inheritance dalam OOP adalah sebuah proses dimana sebuah class mewariskan property 
//// dan methodnya ke class lain atau childnya.
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
//// Polymorpish ini juga dikenal pada konsep OOP yang berarti kemampuan dari suatu objek untuk memiliki banyak bentuk
/// Nah pada Polymorpishm, method yang diwariskan bisa kita ubah dengan behaviour yang berbeda menyesuaikan child class yang kita buat.



///3
class Phone { 
    constructor(brand, storage, ram){
        this.brand = brand
        this.storage = storage
        this.ram = ram
    }

    getBrandName(){
        return this.brand
    }

    setBrandName(newBrand){
        this.brand = newBrand
    }

    printSpecification(){
        console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`);
    }

    setSpecification(newStorage, newRam){
        this.storage = newStorage
        this.ram = newRam
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName()); // "Skilvul Mobile co"
phone.setBrandName("SM.co")
console.log(phone.getBrandName()); // "SM.co"

phone.printSpecification(); // "Ponsel ini memiliki storage: 64 dan ram: 4"
phone.setSpecification(32, 2);
phone.printSpecification(); // "Ponsel ini memiliki storage: 32 dan ram: 2"



////4
class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.courseOfferings = [];
  }
  
  takeNewCourse(course) {
    if (this.courseOfferings.length === 0) {
      const courseOffering = new CourseOffering(course);
      this.courseOfferings = [courseOffering];
      course.reduceQuota();
    } else {
      const isAlreadyExist = this.courseOfferings.find(
        (courseOffering) =>
          courseOffering.course.getSubject() === course.getSubject()
      );

      if (isAlreadyExist === undefined) {
        const courseOffering = new CourseOffering(course);
        this.courseOfferings = [...this.courseOfferings, courseOffering];
        course.reduceQuota();
      }
    }
  }

  takeATest(course) {
    const idx = this.courseOfferings.findIndex(
      (courseOffering) =>
        courseOffering.course.getSubject() === course.getSubject()
    );
    if (this.courseOfferings[idx].attendance >= course.getAttendance()) {
      this.courseOfferings[idx].grade = Math.floor(Math.random() * 100);
    } else {
      console.log(
        `please fill your absen ${course.getSubject()}`
      );
    }
  }

  courseAttendance(course) {
    const idx = this.courseOfferings.findIndex(
      (courseOffering) =>
        courseOffering.course.getSubject() === course.getSubject()
    );
    this.courseOfferings[idx].attendance += 1;
  }
}

class CourseOffering {
  constructor(course) {
    this.course = course;
    this.attendance = 0;
    this.grade = 0;
  }
}

class Course {
  constructor(subject, quota, attendance) {
    this.subject = subject;
    this.quota = quota;
    this.attendance = attendance;
  }

  getSubject() {
    return this.subject;
  }

  getAttendance() {
    return this.attendance;
  }

  reduceQuota() {
    this.quota -= 1;
  }
}


const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);
