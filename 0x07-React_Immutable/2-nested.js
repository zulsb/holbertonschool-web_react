import { fromJS } from 'immutable';

const accessImmutableObject = (object, array) => {
  const  plainObject = fromJS(object);
  return  plainObject.getIn(array, undefined);
};

export default accessImmutableObject;
