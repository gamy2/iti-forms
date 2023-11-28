import React from 'react';
import './registraton-screen.css';
import Input from '../../components/input/input';
import CertificateComponent from '../../components/certificate-component/certificate-component';



const RegistrationScreen = () => {

    return (
       <section className='reg-container '>
<form get="" className='row g-3'>
    {/* <div className='col-6'>
        <label htmlFor="">
            Fname
        </label>
    <Input type="text" />
    </div>
    <div className='col-6'>
        <label htmlFor="">
            Lname
        </label>
    <Input type="text" />
    </div>

    <div className='col-12'>
        <label htmlFor="">
            @username
        </label>
    <Input type="text" />
    </div>

    <div className='col-12'>
        <label htmlFor="">
            Email
        </label>
    <Input type="email" />
    </div>

    <div className='col-12'>
        <label htmlFor="">
            Password
        </label>
    <Input type="password" />
    </div>

    <div className='col-12'>
        <label htmlFor="">
            Re-Password
        </label>
    <Input type="password" />
    </div> 

    <div className='col-12'>
        <label htmlFor="">
            Upload your C.V.
        </label>
    <Input type="file" />
    </div> */}
    
    <div className='col-12'>
        {/* <label htmlFor="" className='col-11'>Certificate</label> <div className='col-1 btn btn-sm btn-outline-success' onClick={renderCertifcate}>+</div> */}
<CertificateComponent />
    </div>

    <input type="submit" />
</form>
       </section>
    );
}

export default RegistrationScreen;
