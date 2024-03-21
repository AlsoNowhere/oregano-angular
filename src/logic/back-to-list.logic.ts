import { path } from 'sage';

export const backToList = () => {
  path.set(['list', ...path.get().slice(1)]);
  console.log('Set');
};
