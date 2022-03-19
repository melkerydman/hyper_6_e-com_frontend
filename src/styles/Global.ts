import { createGlobalStyle } from "styled-components";
import { COLORS } from "../constants";

export default createGlobalStyle`

:root {
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');
  font-family: 'Inter', sans-serif;;
  --clr-background: ${COLORS.primary[0]};
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
  background: var(--clr-background);
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
