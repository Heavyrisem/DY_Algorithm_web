import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchSVG from '../style/img/SearchIco.svg';
import '../style/SearchBar.css';


interface SearchBar_P {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}
const SearchBar = React.forwardRef(function (props: SearchBar_P, ref: React.LegacyRef<HTMLInputElement>) {
    const [Inputmousehover, setInputMousehover] = useState<boolean>(false);
    const [Listmousehover, setListMousehover] = useState<boolean>(false);
    const [focused, setFocused] = useState<boolean>(false);

    const Bar = useRef<HTMLLabelElement>(null);
    const history = useHistory();


    useEffect(() => {
        if (Bar.current) {
            console.log(focused, Listmousehover)
            Bar.current.setAttribute("focus", ((focused || Listmousehover)? "true":"false"));
        }
    }, [focused, Listmousehover]);

    return (
        <>
            <label className="SearchBar" htmlFor="SearchBar" ref={Bar}>
                <img src={SearchSVG} />
                <input autoComplete="off" onBlur={()=>{setFocused(false)}} onFocus={()=>{setFocused(true)}} onChange={props.onChange} ref={ref} type="text" id="SearchBar" placeholder="원하는 문제나 프로그래밍 언어를 입력하세요" />
                
            </label>
            <div className={"SearchSuggest" + (focused || Listmousehover? " Open":"")} onMouseEnter={()=>{setListMousehover(true)}} onMouseLeave={()=>{setListMousehover(false)}}>
                <div className="Suggest"  onClick={(e)=>{history.push('/challenge/문제 1번')}}>
                    문제 1번
                </div>
                <div className="Suggest"  onClick={(e)=>{history.push('/challenge/문제 2번')}}>
                    문제 2번
                </div>
                <div className="Suggest"  onClick={(e)=>{history.push('/challenge/문제 3번')}}>
                    문제 3번
                </div>
            </div>
        </>
    )
})

export default SearchBar;