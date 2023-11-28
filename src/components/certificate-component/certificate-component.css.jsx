import styled from 'styled-components';
import Input from '../input/input';

export const CertificateContainer = styled.div`
  display: flex;
  margin-top: 8px;
  padding-right: 0;
  flex-direction: column;
`;

export const CertificateLabel = styled.label`
  width: 100%;
  margin-bottom: 8px;
`;

export const CertificateButton = styled.div`
  display: inline-block;
  padding: 8px;
  margin-right: 4px;
  color: #28a745;
  cursor: pointer;
`;

export const CertificateRemoveButton = styled(CertificateButton)`
  color: #dc3545;
  margin-left: 4px;
`;

export const CertificateRow = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const CertificateInput = styled(Input)`
  margin-top: 8px;
`;

export const CertificateTitle = styled.h2`
  width: 95%;
`;

export const CertificateTitleContainer = styled.div`
  display: flex;
`;

export const CertificateNumberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
`;

export const CertificateInputContainer = styled.div`
width:100%;
  ${({w50})=>w50 &&`width:50%`}
`;

export const CertificateActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;
