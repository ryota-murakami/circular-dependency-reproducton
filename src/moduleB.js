import { helloA } from './moduleA';

export const helloB = () => {
  console.log('Hello from B');
  helloA();
}; 