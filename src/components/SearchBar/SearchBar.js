import { useState } from "react";

import { warnToast } from '../../services/notify';

import { SearchForm, SearchInput, SearchButton} from './SearchBar.stylled';

export default function SerchBar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleQuery = (event) => {
        setQuery(event.currentTarget.value.toLowerCase());
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(query.trim() === ''){
            warnToast("Go there, I don’t know where, bring that, I don’t know what. Be polite, type something!");   
            return;
        }
        onSubmit(query);
        setQuery('');
    }
   
        return (      
            <>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchInput 
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                        value={query}
                        onChange={handleQuery}
                    />
                    <SearchButton  type="submit">
                        <span>Search</span>
                    </SearchButton>
                </SearchForm>
            </>
        )
}
