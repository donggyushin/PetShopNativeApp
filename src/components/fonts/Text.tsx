import Constants from '../../constants/Constants';
import React from 'react';
import {StyledThemeProps} from '../../styles/theme';
import styled from 'styled-components/native';

const Font = styled.Text`
  color: ${(props: StyledThemeProps) => props.theme.PRIMARY_TEXT_COLOR};
  font-size: ${Constants.fontSize.text};
  line-height: 24px;
`;

interface Props {
  text: string;
}

const Text: React.FunctionComponent<Props> = ({text}) => <Font>{text}</Font>;

export default Text;
