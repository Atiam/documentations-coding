// TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS = new Lesson();
// csForJS.information();

/////////////////////////////////

function LessonFactory() {
  return {
    title: 'Module 17 - Computer Science',
    description: 'CS for JS',
    information() {
      console.log(this.title, this.description);
    },
  };

}
const lessonFactory = LessonFactory();
lessonFactory.information();