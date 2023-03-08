export const EventComponent = (): JSX.Element => {

    const onChange = (e: number) => {
        console.log(e)
    }

    return <div>
        <input onChange={(e)=> onChange(parseInt(e.target.value))} />
    </div>
}