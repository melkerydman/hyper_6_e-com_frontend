import { createGlobalStyle } from "styled-components";
import { COLORS } from "../constants";

export default createGlobalStyle`

:root {
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');
  font-family: 'Inter', sans-serif;

  --h1: 44px;
  --h2: 32px;
  --h3: 24px;
  --h4: 20px;
  --h5: 16px;
  --h6: 12px;
  --paragraph: 14px;
  --span: 12px;
  --h1-line_height: 0.8;
  --h2-line_height: 1;
  --h3-line_height: 1;
  --h4-line_height: 1;
  --h5-line_height: 1;
  --h6-line_height: 1;
  --paragraph-line_height: 1.53;
  --span-line_height: 1;
  --h1-letter_spacing: -7%;
  --h2-letter_spacing: -7%;
  --h3-letter_spacing: -7%;
  --h4-letter_spacing: -7%;
  --h5-letter_spacing: -7%;
  --h6-letter_spacing: -7%;
  --paragraph-letter_spacing: normal;
  --span-letter_spacing: 0.22px;

  /* Colors */
  --color-primary: ${COLORS.primary[1]};
  --color-neutral: ${COLORS.neutral[0]};
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
  background: var(--color-primary);
  
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
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
	font: inherit;
}
`;
