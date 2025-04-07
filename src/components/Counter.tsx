import { createSignal, type Component, type JSX } from "solid-js";

interface Props {
  initValue: number;
  children?: JSX.Element;
}

export const Counter: Component<Props> = (props) => {
    const [count, setCount] = createSignal(props.initValue);
    
    return (
      <div>
        {/* <h1 class="text-4xl" >Counter</h1> */}
        {props.children}
        <p class="text-xl">{count()}</p>
        <button
          class="bg-blue-500 p-2 mr-2 rounded"
          onClick={() => setCount((prev) => ++prev)}
        >
          Increment
        </button>
        <button
          class="bg-blue-500 p-2 mr-2 rounded"
          onClick={() => setCount((prev) => --prev)}
        >
          Decrement
        </button>
      </div>
    );

}