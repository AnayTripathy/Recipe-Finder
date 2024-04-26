

import { useState, useEffect } from 'react';
import RecipeList from "../components/Recipelist";
import Search from "../components/Search";
import { getRecipes } from "../services/api";

const Recipes = () => {

    const [searchedQuery, setSearchedQuery] = useState('____________');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getSearchedResults();
    }, [searchedQuery])

    const getSearchedResults = async () =>{
        let result = await getRecipes(searchedQuery);
        if (result && result.recipes){
            setRecipes(result.recipes);
        }
    }

    return(
        <>
            <Search setSearchedQuery={setSearchedQuery}/>
            <RecipeList recipes={recipes} searchedQuery={searchedQuery}/>
        </>
    )
}

export default Recipes;