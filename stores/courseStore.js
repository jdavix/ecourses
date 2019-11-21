import {createContext} from 'react';
import {action, decorate, observable, computed} from 'mobx';

export class CourseStore {
  currentCourse = {}
  currentChapter = {}

  setCourse = (course) => {
    this.currentCourse = course;
  }

  setChapter = (chapter) => {
    this.currentChapter = chapter;
  }
}

decorate(CourseStore, {
  currentCourse: observable,
  currentChapter: observable,
  setCourse: action,
  setChapter: action,
})

export default createContext(new CourseStore());