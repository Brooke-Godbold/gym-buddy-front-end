import styled from 'styled-components';
import { BaseItem, CommonButton } from '../../../styles/GlobalStyles';

const StyledEquipmentSummary = styled.div`
  ${BaseItem}

  background-color: ${(props) =>
    props.$ownedReview ? 'var(--color-brand-100)' : 'var(--color-grey-100)'};
  border-top: ${(props) =>
    props.$ownedReview
      ? 'solid 4px var(--color-brand-300)'
      : 'solid 4px var(--color-brand-200)'};

  width: 100%;

  padding: 2.4rem;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const EquipmentSummaryHeading = styled.h3``;

const EquipmentUsefulnessContainer = styled.div`
  position: absolute;
  right: 2.4rem;
  top: 2.8rem;

  @media (max-width: 80em) {
    position: static;

    margin-top: 2.4rem;
    align-self: flex-end;
  }
`;

const EquipmentSummaryQualityContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const EquipmentSummaryButton = styled.button`
  ${CommonButton}

  height: 3.6rem;
`;

export {
  StyledEquipmentSummary,
  EquipmentSummaryHeading,
  EquipmentUsefulnessContainer,
  EquipmentSummaryQualityContainer,
  EquipmentSummaryButton,
};
