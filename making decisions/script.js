let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
  ]
  
  let studentsWhoPass = [
    'A',
    'B-', 
    4,
    5
  ];

for (let i=0; i < studentsWhoPass.length; i++){
    console.log('your exam results', studentsWhoPass[i]);
}

  if (allStudents && studentsWhoPass){
    //Condition was true. Code in this block will run.
    console.log("You passed the test!");
}

if (allStudents || studentsWhoPass){
    //Condition was true. Code in this block will run.
    console.log("You passed the test!");
}

else {
    //Condition was true. Code in this block will run.
    console.log("You didn't pass the test, keep trying!");
}

if (!allStudents) {
    // runs if condition is false
  } else {
    console.log("You passed the test!");
  }
  