# Modeling-and-Shader-Basics
Modeling and Shader Basics in computer graphics


Task 1–Modeling

You will model the geometry of an ellipse, centered at the origin.

You can model a circle/ellipse using triangle fansas -bottom,by varying 𝜃values:

•An  ellipse  is  defined  in  polar  coordinates  as  (𝑥𝑟∗𝑐𝑜𝑠𝜃,𝑦𝑟∗𝑠𝑖𝑛𝜃).  You  will  get 𝑥𝑟,𝑦𝑟,and 𝜃values from user, using the input widgets.

•Initialvalues for the parameters are (𝑥𝑟=0.2,𝑦𝑟=0.1,𝜃=10)•Note  that you  can  use  JavascriptMath  object  for  cosine  and  sine  functions,  they  take  input  as radians. 




Task 2 –Interaction

•Resolution: Theta angle (Figure 2–right-bottom) to  determine the resolution of the vertices in ellipse.
•X-radius:Radius of the ellipse in x direction.
•Y-radius:Radius of the ellipse in y direction.
•Color:Pass the color obtained from slidersto the fragment shader to determine the color of the ellipse.
•Position: Perform 2D displacementaccording to X and Y slider values.
•Scale: Scale the size of the shapesaccording to the slider values.(Scalingshould be local (about the center of the geometry. Itshould not change the position.)
