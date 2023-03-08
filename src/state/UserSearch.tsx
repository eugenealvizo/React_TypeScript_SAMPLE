import { useState } from "react";


const users = [
    { name: 'Eugene', age: 20 },
    { name: 'Megan', age: 20, },
    { name: 'Natalie', age: 2, },
]


export const UserSearch = (): JSX.Element => {

    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: String, age: number } | undefined>();

    const onSearch = () => {
        const foundUser = users.find((user) => user.name == name)


        setUser(foundUser)
    }

    return <div>
        User Search
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onSearch}>Search</button>

        {user && `${user.name} ${user.age}`}
    </div>
}