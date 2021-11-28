import { useState } from "react";

export function SpinnerLoader(props) {

    const [] = useState();

    const slc = [
        '#2980b9',
        '#e74c3c',
        '#e67e22',
        '#27ae60',
    ];

    var flag = 0;

    const tsl = setInterval(function () {

        if(document.getElementById('Spinner_Loader_v1')) {

            const sli = document.getElementById('Spinner_Loader_v1');

            if(flag > slc.length) {

                flag = 0;
            }

            sli.style.borderTop = `4px solid ${slc[flag]}`; 
        
            flag++;
        }
    }, 2000);

    return (
        <>
            {/* <!-- Pre-loader start --> */}
                <div id="Wrapper_Spinner_Loader_v1">
                    <div id="Spinner_Loader_v1"></div>
                    <div className="Spinner_Loader_Text_Wrapper">
                        <p id="Spinner_Loader_Text">Loading . . .</p>
                    </div>
                </div>
            {/* <!-- Pre-loader end --> */}
        </>
    )
}