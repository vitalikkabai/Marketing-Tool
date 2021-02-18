import { Observable } from 'rxjs';
import { ActionTypes } from '../store/storeTypes';

export const getSharedIndex = (a: string, b: string): string => {
    const partsA = a.split('-');
    const partsB = b.split('-');
    const partsRes: string[] = [];
    for (let i = 0; i < 5; i++) {
        partsRes.push(
            Math.abs(Number.parseInt(partsA[i], 16) ^ Number.parseInt(partsB[i], 16)).toString(16)
        );
    }
    return partsRes.join('-');
};

type NarrowAction<T, N> = T extends { type: N } ? T : never;

export function filterAction<T extends ActionTypes, N extends T['type'], R = NarrowAction<T, N>>(
    ...types: N[]
): (source: Observable<T>) => Observable<R> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function <T extends ActionTypes>(source: Observable<T>): Observable<any> {
        return new Observable((subscriber) => {
            return source.subscribe({
                next(value) {
                    for (const type of types) {
                        if (value.type === type) {
                            subscriber.next(value);
                            break;
                        }
                    }
                },
            });
        });
    };
}
