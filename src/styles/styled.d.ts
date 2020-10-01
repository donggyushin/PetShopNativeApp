// 초기의 모듈을 import 한다
import 'styled-components';

// 그리고 확장한다
declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string;
    PRIMARY_BACKGROUND_COLOR: string;
    PRIMARY_TEXT_COLOR: string;
    SECONDARY_TEXT_COLOR: string;
    PRIMARY_BUTTON_COLOR: string;
    SECONDARY_BUTTON_COLOR: string;
  }
}
