interface ChildProps {
    color: String;
    onClick: () => void
}


export const Child = ({ color, onClick }: ChildProps): JSX.Element => {
    return <button onClick={onClick}>{color}</button>;
}




