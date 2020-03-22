import Realm from 'realm';

import AnswerSchema from '../schemas/AnswerSchema';

export default function getRealm() {
  return Realm.open({
    schema: [AnswerSchema],
  });
}
