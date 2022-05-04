import { createGlobalStyle } from "styled-components";
import { COLORS } from "../constants";

export default createGlobalStyle`

@font-face {
  font-family: Kaensla;
  src: url(/Users/melkerrydman/Library/Fonts/Kaensla-Regular.otf);
}
@font-face {
  font-family: Kolligio;
  src: url(/Users/melkerrydman/Library/Fonts/Kolligio.otf);
}
@font-face {
  font-family: "Blue Ocean";
  src: url("/Users/melkerrydman/Library/Fonts/BLUE OCEAN ITALIC.otf");
}
:root {
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');
  font-family: 'Inter', sans-serif;

  --h1: 44px;
  --h2: 32px;
  --h3: 24px;
  --h4: 20px;
  --h5: 16px;
  --h6: 12px;
  --p1: 18px;
  --p2: 14px;
  --span: 12px;
  --h1-line_height: 0.8;
  --h2-line_height: 1;
  --h3-line_height: 1;

    /* --font-size-h1: 47px;
    --font-size-h2: 29px;
    --letter-spacing-h2: -0.5px;
    --font-size-p1: 19px;
    --font-size-p2: 13px;
    --line-height-p2: 1.15;
    --extra-large: 280px;
    --large: 210px;
    --mediumAndSmall: 90px;
    --medium: 70px;
    --paddingCard: 30px;
    --small: 20px; */

  --p1-line_height: 1.53;
  --span-line_height: 1;
  --h1-letter_spacing: -2px;
  --h2-letter_spacing: -1px;
  --h3-letter_spacing: -.5px;
  --p1-letter_spacing: -0.5px;
  --p2-letter_spacing: -0.25px;
  --span-letter_spacing: 0.22px;
  --gutter: 16px;

  /* Header */
  --header: 75px;

  /* Colors */
  --color-primary: ${COLORS.primary[1]};
  --color-neutral: ${COLORS.neutral[0]};
  --color-light: #ffffff;
  --color-light-second: #efefef;
  --color-grey: #c4c4c4;
  --color-dark: #171717;

  /* Breakpoints */
  --sm: 576px;
  --md: 768px;
  --lg:992px;
  --xl:1200px;
  --xxl:1400px;
}

.App {
  height: 100vh;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  font-weight: 400;

  min-height: 100vh;
  background: var(--color-light);
  
  overscroll-behavior: none
}
ol,
ul {
  list-style: none;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

a {
	text-decoration: none;
  color: var(--color-dark)
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
	font: inherit;
}
`;
