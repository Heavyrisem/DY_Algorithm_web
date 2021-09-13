import React, { useState } from "react";
import '../style/Terminal.css';

enum Tab_T {
    OUTPUT = "출력",
    TESTCASE = "테스트 케이스"
}
interface Terminal_P {
    output: string
}
function Terminal(props: Terminal_P) {
    const [CurrentTab, setTab] = useState<Tab_T>(Tab_T.OUTPUT);

    return (
        <div className="Terminal">
            <header>
                <Tab activate={Tab_T.OUTPUT==CurrentTab} name={Tab_T.OUTPUT} onClick={()=>{setTab(Tab_T.OUTPUT)}} />
                <Tab activate={Tab_T.TESTCASE==CurrentTab} name={Tab_T.TESTCASE} onClick={()=>{setTab(Tab_T.TESTCASE)}} />
            </header>

            <div className="View">
                {CurrentTab == Tab_T.OUTPUT&&
                    props.output.split("\n").map(str => (
                        <>
                            <span>{str}</span><br />
                        </>
                    ))
                }
                {CurrentTab == Tab_T.TESTCASE&&
                    "테스트 케이스를 추가 할 수 있는 화면입니다."
                }
            </div>
        </div>
    )
}

interface Tab_P {
    activate: boolean
    name: Tab_T
    onClick: React.MouseEventHandler<HTMLSpanElement>
}
function Tab(props: Tab_P) {
    return (
        <span className={"Tab" + (props.activate? " activated":"")} onClick={props.onClick}>
            <span>{props.name.toString()}</span>
        </span>
    )
}

export default Terminal;