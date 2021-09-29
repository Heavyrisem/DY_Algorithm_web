import React, { useContext, useEffect, useRef, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router';
import HorizontalScaler from '../componets/HorizontalScaler';
import { HeaderButtonsContext, PathContext, User_T } from '../Main';
import MDEditor from '@uiw/react-md-editor';

import { ENDPOINT } from './Config.json';

import '../style/Challenge.css';
import axios from 'axios';
import { CompileRequest, CompileResponse, LANGUAGETYPE } from '../componets/Types';

export interface Create_Challenge_RouteParams {
    challenge_ID?: string
}
interface Challenge_P {
    match: RouteComponentProps<Create_Challenge_RouteParams>
    User?: User_T
}

function Challenge(props: Challenge_P) {
    const { path, setPath } = useContext(PathContext);
    const { Buttons, setButtons } = useContext(HeaderButtonsContext);
    const history = useHistory();

    const [type, setType] = useState<LANGUAGETYPE>(LANGUAGETYPE.NODEJS);
    const [Language, setLanguage] = useState("");
    const [Description, setDesc] = useState<string | undefined>("");

    // const [code, setCode] = useState<string>("");
    const [isRunning, setRunning] = useState<boolean>(false);
    const [TerminalOutput, setTermOutput] = useState<string>("결과가 여기에 표시됩니다.");


    useEffect(() => {
        if (!props.User) {
            alert("로그인을 먼저 해 주세요.");
            history.push("/login");
        }
        setPath(["문제 작성"]);
    },[]);

    // useEffect(() => {
    //     let languagename = "";
        
    //     switch (type) {
    //         case LANGUAGETYPE.NODEJS: languagename="javascript"; break;
    //         case LANGUAGETYPE.C: languagename="cpp"; break;
    //         case LANGUAGETYPE.PYTHON3: languagename="python"; break;
    //     }
    //     setLanguage(languagename);
    //     console.log(type, languagename);
    // }, [type]);

    // async function RunCode() {
    //     if (!props.User) return alert("먼저 로그인 해 주세요");
    //     if (isRunning) return alert("이미 실행중입니다.");
    //     console.log("Run", Code);
    //     setTermOutput("실행 중입니다.....");
    //     setRunning(true);
    //     const RequestOpt: CompileRequest = {
    //         TYPE: type,
    //         code: Code,
    //         Challenge_NO: 0,
    //         U_Token: props.User.U_Token
    //     }
    //     try {
    //         const ServerResponse = await axios.post<CompileResponse>(`${ENDPOINT}/compiler`, RequestOpt, {headers: {'Content-Type': 'application/json'}});
    //         if (ServerResponse.data.stdout) setTermOutput(ServerResponse.data.stdout);
    //         else if (ServerResponse.data.stderr) setTermOutput(ServerResponse.data.stderr);
    //         else console.log(ServerResponse.data);
    //         setRunning(false);
    //     } catch (err) {
    //         console.log("err", err);
    //     }

    // }
    const WriteComponent = React.forwardRef(function(props, ref: React.LegacyRef<HTMLDivElement>) {
        const WriteRef = useRef<HTMLDivElement>(null);
        // Todo - Markup Support
        
        useEffect(() => {
            console.log(WriteRef.current?.clientHeight);
        }, [WriteRef.current?.clientHeight]);

        return (
            <div className="Write" ref={WriteRef}>
                <MDEditor onChange={setDesc} value={Description} height={WriteRef.current?.clientHeight} />
            </div>
        )
    })    

    return (
        <div className="Challenge">
            <HorizontalScaler>
                <WriteComponent />
                <MDEditor.Markdown source={Description} />
                {/* <> */}
                    {/* <div className="EditorHeader"> */}
                        {/* 입력값 */}
                        {/* <Dropdown name="" onValue={(e)=>{setType(e.target.value as LANGUAGETYPE)}}>
                            <option value={LANGUAGETYPE.NODEJS}>Node.js</option>
                            <option value={LANGUAGETYPE.C}>C</option>
                            <option value={LANGUAGETYPE.PYTHON3}>Python3</option>
                        </Dropdown>
                        <button onClick={RunCode}>실행</button> */}
                    {/* </div> */}
                    {/* <MonacoEditor
                        language={Language}
                        width="100%"
                        height="100%"
                        theme="vs-dark"
                        value={Code}
                        options={{automaticLayout: true, smoothScrolling: true}}
                        onChange={(str) => setCode(str)}
                    /> */}
                {/* </> */}
            </HorizontalScaler>
        </div>
    )
}



export default Challenge