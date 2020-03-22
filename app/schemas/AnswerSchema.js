export default class AnswerSchema {
  static schema = {
    name: 'Answer',
    primaryKey: 'question',
    properties: {
      level: 'string',
      correct: 'bool',
      question: 'string',
    },
  };
}
