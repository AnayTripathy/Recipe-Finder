import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Button } from "semantic-ui-react";


const Home = () => {
    return(
    <Header title="Recipes Book" bgClass="bg-image">
        <Button
            content="SEARCH RECIPES"
            color="primary"
            as = {Link}
            to = "/recipes"
            size="big"
        />
    </Header>
    )
}

export default Home;