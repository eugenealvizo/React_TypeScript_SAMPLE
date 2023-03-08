import { Child } from './Child';

const Parent = (): JSX.Element => {
    return <Child color="red" onClick={() => alert("Hello")} />;
}

export default Parent;