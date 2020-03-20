export class Question {
  id?: number;
  content?: string;
  answer?: boolean;

  constructor(id, content, answer) {
    this.id = id;
    this.content = content;
    this.answer = answer;
  }
}
