import React, { useState } from 'react'

function InputHandlingDemo2() {
    const [first, setFirst] = useState("")
    const [stat, setstat] = useState("")
    const [cityname, setcityname] = useState("")


    const statenameHandling = (event) => {
        console.log(event);
        // console.log(event.target.value);
        // console.log(event.target.select[name="State"]);
        setstat(event.target.value)
        setFirst(event.target.value)
    }

    const citynameHandling = (event) => {
        // console.log(event);
        console.log(event.target.value);
        // console.log(event.target.select[name="State"]);
        setcityname(event.target.value)
    }

    return (
        <div>
            <h1>InputHandlingDemo2</h1>
            <div>
                <label>State :  </label>
                <select name="state" onChange={(event) => { statenameHandling(event) }}>
                    <option value="" >None</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                </select>
            </div>
            {
                first == "Gujarat" && <div>
                    <label>City :  </label>
                    <select name="city" id="" onChange={(event) => { citynameHandling(event) }}>
                        <option value="">None</option>
                        <option value="Surat">Surat</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Vadodara">Vadodara</option>
                    </select>

                </div>
            }

            {
                first == "Bihar" && <div>
                    <label>City :  </label>
                    <select name="city" id="" onChange={(event) => { citynameHandling(event) }}>

                        <option value="">None</option>
                        <option value="Patna">Patna</option>
                        <option value="Gaya">Gaya</option>
                        <option value="Motihari">Motihari</option>
                        <option value="Muzaffarpur">Muzaffarpur</option>
                        <option value="Saran">Saran</option>
                        <option value="Vaishali">Vaishali</option>
                    </select>
                </div>
            }

            {
                first == "Uttar Pradesh" && <div>
                    <label>City :  </label>
                    <select name="city" id="" onChange={(event) => { citynameHandling(event) }}>

                        <option value="">None</option>
                        <option value="Prayagraj">Prayagraj (Allahabad)</option>
                        <option value="Varanasi">Varanasi</option>
                        <option value="Meerut">Meerut</option>
                        <option value="Muzaffarnagar">Muzaffarnagar</option>
                        <option value="Gaziabad">Gaziabad</option>
                        <option value="Azamgarh">Azamgarh</option>
                        <option value="Jaunpur">Jaunpur</option>
                        <option value="Pratapgarh">Pratapgarh</option>
                    </select>
                </div>
            }

            {/* <h1>State Name :-{stat}</h1>
            <h2>City Name :- {cityname}</h2> */}
        </div>
    )
}

export default InputHandlingDemo2