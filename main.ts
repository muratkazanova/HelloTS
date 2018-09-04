import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const source$ = interval(1000).pipe(take(7));
source$.subscribe(i => console.log(i));

const t = 'MK';
setTimeout(() => {
  console.log(`Hello ${t}`);
}, 3000);
