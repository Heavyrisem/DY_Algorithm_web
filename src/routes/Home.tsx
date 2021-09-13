import React, { useContext, useEffect, useRef } from "react";
import Board from "../componets/Board";
import SearchBar from "../componets/SearchBar";
import { PathContext } from "../Main";
import '../style/Home.css';

function Home() {
    const { path, setPath } = useContext(PathContext);
    const Search = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setPath([]);
    }, []);

    return (
        <div className="Home">
            <SearchBar ref={Search} />

            <div className="DashBoards">
                <Board style={{flex: '.8'}}>
                    
                </Board>
                <Board style={{flex: '.2'}}>
                    
                </Board>
            </div>
        </div>
    )
}

export default Home;