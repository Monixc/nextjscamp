const students = [
  { name: "Alice", age: 21, gender: "male", height: 170 },
  { name: "Bob", age: 19, gender: "male", height: 165 },
  { name: "Charlie", age: 20, gender: "male", height: 175 },
  { name: "David", age: 22, gender: "male", height: 180 },
  { name: "Eve", age: 17, gender: "female", height: 160 },
  { name: "Frank", age: 18, gender: "male", height: 175 },
  { name: "Grace", age: 21, gender: "female", height: 165 },
  { name: "Henry", age: 19, gender: "male", height: 170 },
  { name: "Ivy", age: 20, gender: "female", height: 155 },
  { name: "Jack", age: 22, gender: "male", height: 185 },
];

// 1. 키가 185인 학생 찾기
{
  const tall = students.filter((student) => student.height === 185);
  console.log(tall);
}

//2. 나이가 20살 이상인 학생들 찾기
{
  const adult = students.filter((student) => student.age >= 20);
  console.log(adult);
}
//3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
{
  const small = (student) => student.height <= 165;
  console.log(students.some(small));
}

//4. 학생들이 모두 10살 이상인지 확인해서 true, false 반환하기
{
  const olderThenTen = (student) => student.age >= 10;
  console.log(students.every(olderThenTen));
}

//5. 학생들의 평균 연령 구하기
{
  const sumOfAges = students.reduce(
    (accumulator, student) => accumulator + student.age,
    0
  );
  const averageAge = sumOfAges / students.length;
  console.log(averageAge);
}

//6. 남학생들의 평균 연령 구하기
{
  const male = students.filter((student) => student.gender === "male");
  const sumOfMales = male.reduce(
    (accumulator, student) => accumulator + student.age,
    0
  );
  const averageMales = sumOfMales / male.length;
  console.log(averageMales);
}

//7. 야학생들만 따로 추출해서 새로운 배열 만들기
{
  const female = students.filter((student) => student.gender === "female");
  const sumOfFemale = female.reduce(
    (accumulator, student) => accumulator + student.age,
    0
  );
  const averageFemale = sumOfFemale / female.length;
  console.log(averageFemale);
}

//8. 여학생들 중 나이가 가장 어린 학생 찾기
{
  const female = students.filter((student) => student.gender === "female");
  female.sort((a, b) => a.age - b.age); //비교 함수를 사용해야한다.
  console.log(female[0]);
}
