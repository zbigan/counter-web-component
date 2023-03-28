declare class CounterWCNative extends HTMLElement {
    count: number;
    constructor();
    render(): void;
    connectedCallback(): void;
    countIncrease(): void;
    countDecrease(): void;
}
type CustomEvents<K extends string> = {
    [key in K]: (event: CustomEvent) => void;
};
type CustomElement<T, K extends string = ''> = Partial<T & {
    children: any;
} & CustomEvents<`on${K}`>>;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            ['counter-wc-native']: CustomElement<CounterWCNative>;
        }
    }
}
export { CounterWCNative };
