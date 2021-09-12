import React, { useState } from "react";
import SearchSVG from '../style/img/SearchIco.svg';
import '../style/SearchBar.css';


interface SearchBar_P {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}
const SearchBar = React.forwardRef(function (props: SearchBar_P, ref: React.LegacyRef<HTMLInputElement>) {
    const [focused, setFocused] = useState<boolean>(true);

    return (
        <>
            <label className="SearchBar" htmlFor="SearchBar">
                <img src={SearchSVG} />
                <input autoComplete="off" onBlur={()=>{setFocused(false)}} onFocus={()=>{setFocused(true)}} onChange={props.onChange} ref={ref} type="text" id="SearchBar" placeholder="원하는 문제나 프로그래밍 언어를 입력하세요" />
                
            </label>
            <div className={"SearchSuggest" + (focused? " Open":"")}>
                <div className="Suggest">
                    asdfasdf adsfasdf
                </div>
                <div className="Suggest">
                    asdfasdf adsfasdf
                </div>
                <div className="Suggest">
                    asdfasdf adsfasdf
                </div>
            </div>
        </>
    )
})

export default SearchBar;