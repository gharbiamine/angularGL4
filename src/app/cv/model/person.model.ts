export class Person {
  constructor(
    public id: number = 0,
    public firstname: string = '',
    public lastname: string = '',
    public age: number = 0,
    public job: string = '',
    public image: string = '',
    public description: string = ''
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.job = job;
    this.image = image;
    this.description = description;
  }
}
