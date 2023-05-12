/**@jsxRuntime classic */
/**@jsx jsx*/
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

/**
 * EmotionはいろいろなCSSのスタイルの当て方ができる
 * 開発時はチーム間でどのCSSを使うか認識を合わせた方が良い
 */

export const Emotion = () => {
  //scassと同じ書き方ができる
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  //inline cssの書き方もできる
  const titleStyle = css({
    margin: 0,
    color: "#3d84a8"
  });
  //Styled Componentsと同じ書き方もできる
  //import styled from "@emotion/styled";が必要
  const SButton = styled.button`
    background-color: #abedd8;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
      background-color: #46cdcf;
      color: #fff;
      cursor: pointer;
    }
  `;

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT!!</SButton>
    </div>
  );
};
