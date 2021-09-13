import React, { useContext, useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { RouteComponentProps } from 'react-router';
import HorizontalScaler from '../componets/HorizontalScaler';
import Terminal from '../componets/Terminal';
import VerticalScaler from '../componets/VerticalScaler';
import { PathContext } from '../Main';


import '../style/Challenge.css';


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
    const {path, setPath} = useContext(PathContext);
    const [code, setCode] = React.useState<string>("");

    useEffect(() => {

        setPath([match.params.id]);

    },[])

    return (
        <div className="Challenge">
            <HorizontalScaler>
                <Description description={DESC_D} />
                <VerticalScaler style={{overflow: 'hidden'}}>
                    <MonacoEditor
                        language="javascript"
                        width="100%"
                        height="100%"
                        theme="vs-dark"
                        value={code}
                        options={{automaticLayout: true}}
                        onChange={(code) => setCode(code)}
                    />
                    <Terminal output={TERM_D} />
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