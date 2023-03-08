import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypeSelector";

const RepositoriesList = (): JSX.Element => {

    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { loading, error, data } = useTypedSelector((state) => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term);
    }


    return (<div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
        </form>
        { error && <h3>{error}</h3>}
        {loading && <h3>loading...</h3>}
        {!error && !loading && <h3>{data.map((data)=> (
            <li key={data}>{data}</li>
        ))}</h3>}
    </div>);

}

export default RepositoriesList