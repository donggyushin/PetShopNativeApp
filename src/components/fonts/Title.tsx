import Constants from '../../constants/Constants';
import React from 'react';
import {StyledThemeProps} from '../../styles/theme';
import styled from 'styled-components/native';

const Font = styled.Text`
  color: ${(props: StyledThemeProps) => props.theme.PRIMARY_TEXT_COLOR};
  font-size: ${Constants.fontSize.title};
  font-weight: ${Constants.fontWeight.title};
`;

interface Props {
  text: string;
}

const Title: React.FunctionComponent<Props> = ({text}) => <Font>{text}</Font>;

export default Title;
