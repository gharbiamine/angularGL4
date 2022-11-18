export class Person {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public age: number,
    public job: string,
    public image: string,
    public description: string = ''
  ) {
    this.age = age;
    this.firstname = firstname;
    this.lastname = lastname;
    this.job = job;
    this.image = image;
    this.description = description;
  }
}
