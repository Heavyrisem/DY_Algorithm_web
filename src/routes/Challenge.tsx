import React, { useContext, useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { RouteComponentProps } from 'react-router';
import HorizontalScaler from '../componets/HorizontalScaler';
import Terminal from '../componets/Terminal';
import VerticalScaler from '../componets/VerticalScaler';
import { HeaderButtonsContext, PathContext } from '../Main';

import { ENDPOINT } from './Config.json';


import '../style/Challenge.css';
import axios from 'axios';
import { CompileRequest, CompileResponse, LANGUAGETYPE } from '../componets/Types';
import { Dropdown } from '../componets/Sidemenu';


const DESC_D = `문제 설명

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.


제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.


입출력 예
participant	completion	return
[“Leo”, “kiki”, “eden”]	[“eden”, “kiki”]	“leo”
[“marina”, “josipa”, “nikola”, “vinko”, “filipa”]	[“josipa”, “filipa”, “marina”, “nikola”]	“vinko”
[“mislav”, “stanko”, “mislav”, “ana”]	[“stanko”, “ana”, “mislav”]	“mislav”

입출력 예 설명

예제 #1
“leo”는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
예제 #2
“vinko”는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
예제 #3
“mislav”는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.`;
const TERM_D = `node:internal/modules/cjs/loader:936
throw err;
^

Error: Cannot find module '/Users/heavyrisem/Desktop/DY_Algorithm_Server/a'
  at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
  at Function.Module._load (node:internal/modules/cjs/loader:778:27)
  at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)
  at node:internal/main/run_main_module:17:47 {
code: 'MODULE_NOT_FOUND',
requireStack: []
}`;
interface Challenge_RouteParams {
    id: string
}
function Challenge({match}: RouteComponentProps<Challenge_RouteParams>) {
    const { path, setPath } = useContext(PathContext);
    const { Buttons, setButtons } = useContext(HeaderButtonsContext);

    const [type, setType] = useState<LANGUAGETYPE>(LANGUAGETYPE.NODEJS);
    const [Language, setLanguage] = useState("");
    const [Code, setCode] = useState<string>("");

    // const [code, setCode] = useState<string>("");
    const [isRunning, setRunning] = useState<boolean>(false);
    const [TerminalOutput, setTermOutput] = useState<string>("결과가 여기에 표시됩니다.");

    useEffect(() => {

        setPath([match.params.id]);

        // function RunComponent() {
        //     return (
        //         <button className="RunButton" onClick={RunCode}>실행</button>
        //     )
        // }
        // setButtons(Buttons.concat([<RunComponent />]));
    },[]);

    useEffect(() => {
        let languagename = "";
        
        switch (type) {
            case LANGUAGETYPE.NODEJS: languagename="javascript"; break;
            case LANGUAGETYPE.C: languagename="cpp"; break;
            case LANGUAGETYPE.PYTHON3: languagename="python"; break;
        }
        setLanguage(languagename);
        console.log(type, languagename);
    }, [type]);

    async function RunCode() {
        if (isRunning) return alert("이미 실행중입니다.");
        console.log("Run", Code);
        setTermOutput("실행 중입니다.....");
        setRunning(true);
        const RequestOpt: CompileRequest = {
            TYPE: type,
            code: Code,
            Challenge_NO: 0,
            U_Token: "b55SG4VmcSm4AS6ln0xnrzzP7V7rNdnzEoZ94YIpjq7vyr7nfdVld0baCWgLXudDuz17sAUpOTx74K1koWZP2p"
        }
        try {
            const ServerResponse = await axios.post<CompileResponse>(`${ENDPOINT}/compiler`, RequestOpt, {headers: {'Content-Type': 'application/json'}});
            if (ServerResponse.data.stdout) setTermOutput(ServerResponse.data.stdout);
            else if (ServerResponse.data.stderr) setTermOutput(ServerResponse.data.stderr);
            else console.log(ServerResponse.data);
            setRunning(false);
        } catch (err) {
            console.log("err", err);
        }

    }

    return (
        <div className="Challenge">
            <HorizontalScaler>
                <Description description={DESC_D} />
                <VerticalScaler style={{overflow: 'hidden'}}>
                    <>
                        <div className="EditorHeader">
                            <Dropdown name="" onValue={(e)=>{setType(e.target.value as LANGUAGETYPE)}}>
                                <option value={LANGUAGETYPE.NODEJS}>Node.js</option>
                                <option value={LANGUAGETYPE.C}>C</option>
                                <option value={LANGUAGETYPE.PYTHON3}>Python3</option>
                            </Dropdown>
                            <button onClick={RunCode}>실행</button>
                        </div>
                        <MonacoEditor
                            language={Language}
                            width="100%"
                            height="100%"
                            theme="vs-dark"
                            value={Code}
                            options={{automaticLayout: true}}
                            onChange={(str) => setCode(str)}
                        />
                    </>
                    <Terminal output={TerminalOutput} />
                </VerticalScaler>
            </HorizontalScaler>
        </div>
    )
}

function Description(props: {description: string}) {
    // Todo - Markup Support
    
    return (
        <div className="Description">
            {props.description.split("\n").map(str => (<span>{str}<br /></span>))}
        </div>
    )
}



export default Challenge