import React, { useState } from 'react';
import Input from '../input/input';

const CertificateComponent = (props) => {
   const [certificate, setCertificate]=useState([0]);
    const renderCertifcate=async ()=>{
        let ne = [...certificate,(certificate.length)]
        await setCertificate(ne);
        console.log(certificate);

    }
    const removeCertifcate=(i)=>{
        let newCertificate=[...certificate];
        newCertificate.splice(i,1);
        setCertificate(newCertificate);

    }
    return (
        <>
    <label className='col-11'>Certificate</label> {certificate.length == 0 ? <div className='col-1 btn btn-sm btn-outline-success' onClick={renderCertifcate}>+</div> :
    <> <div className='col-1' ></div> {certificate.map((element,index)=>{return(<div key={element} className='row col-12 mt-2'>
          <div className='row'>
              <div className='col-10'></div>
              <div className='col-1'>
          <div className='btn btn-outline-success' onClick={renderCertifcate}>+</div>
              </div>
              <div className='col-1'>
          <div className='btn btn-outline-danger' onClick={()=>{removeCertifcate(index)}}>-</div>
              </div>
          
          </div>
          <div className='col-12'>
                  <label>
                      number
                  </label>
              <Input type="text" />
              </div>
          <div className='col-6'>
                  <label>
                      Start at
                  </label>
              <Input type="date" />
              </div>
              <div className='col-6'>
                  <label>
                      End in
                  </label>
              <Input type="date" />
              </div>
                      
                  </div>);})} </>
}
  
        {/* <p>{certificate.toString()}</p> */}
        </>
    );
}

export default CertificateComponent;
