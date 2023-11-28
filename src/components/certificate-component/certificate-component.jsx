import React, { useState } from 'react';
import {CertificateContainer,CertificateTitleContainer,CertificateTitle,CertificateButton,CertificateRow,CertificateNumberContainer,CertificateInputContainer,CertificateLabel,CertificateInput,CertificateActionsContainer,CertificateRemoveButton} from './certificate-component.css';

const CertificateComponent = (props) => {
  const [certificate, setCertificate] = useState([0]);

  const renderCertificate = async () => {
    let ne = [...certificate, certificate.length];
    await setCertificate(ne);
    console.log(certificate);
  };

  const removeCertificate = (i) => {
    let newCertificate = [...certificate];
    newCertificate.splice(i, 1);
    setCertificate(newCertificate);
  };

  return (
    <CertificateContainer>
      <CertificateTitleContainer>
        <CertificateTitle>Certificate</CertificateTitle>
        <CertificateButton onClick={renderCertificate}>+</CertificateButton>
      </CertificateTitleContainer>

      {certificate.length === 0 ? (
        <></>
      ) : (
        <>
          <div></div>
          {certificate.map((element, index) => {
            return (
              <CertificateRow key={element}>
                <CertificateNumberContainer>
                  <CertificateInputContainer>
                    <CertificateLabel>Number</CertificateLabel>
                    <CertificateInput type='text' />
                  </CertificateInputContainer>
                  <CertificateInputContainer w50={true}>
                    <CertificateLabel>Start at</CertificateLabel>
                    <CertificateInput type='date' />
                  </CertificateInputContainer>
                  <CertificateInputContainer w50={true}>
                    <CertificateLabel>End in</CertificateLabel>
                    <CertificateInput type='date' />
                  </CertificateInputContainer>
                  
                </CertificateNumberContainer>

                <CertificateActionsContainer>
                  <CertificateButton onClick={renderCertificate}>+</CertificateButton>
                  <CertificateRemoveButton onClick={() => removeCertificate(index)}>-</CertificateRemoveButton>
                </CertificateActionsContainer>
              </CertificateRow>
            );
          })}
        </>
      )}
    </CertificateContainer>
  );
};

export default CertificateComponent;