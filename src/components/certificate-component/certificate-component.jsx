import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../input/input';

const CertificateContainer = styled.div`
  display: flex;
  margin-top: 8px;
  padding-right: 0;
  flex-direction: column;
`;

const CertificateLabel = styled.label`
  width: 100%;
  margin-bottom: 8px;
`;

const CertificateButton = styled.div`
  display: inline-block;
  padding: 8px;
  margin-right: 4px;
  color: #28a745;
  cursor: pointer;
`;

const CertificateRemoveButton = styled(CertificateButton)`
  color: #dc3545;
  margin-left: 4px;
`;

const CertificateRow = styled.div`
  display: flex;
  margin-top: 8px;
`;

const CertificateInput = styled(Input)`
  margin-top: 8px;
`;

const CertificateTitle = styled.h2`
  width: 95%;
`;

const CertificateTitleContainer = styled.div`
  display: flex;
`;

const CertificateNumberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
`;

const CertificateInputContainer = styled.div`
width:100%;
  ${({w50})=>w50 &&`width:50%`}
`;

const CertificateActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

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