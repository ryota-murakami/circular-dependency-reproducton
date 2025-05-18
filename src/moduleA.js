import { helloB } from './moduleB';

export const helloA = () => {
  console.log('Hello from A');
  helloB();
}; 