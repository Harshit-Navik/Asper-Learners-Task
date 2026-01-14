///////////////////////////////////////////////////////////////////////////////////////////////////////

# bug-1: Null error in console 

# why it happend : 

--> because script tag is placed in head tag instead of bottom at body , and because of that the js is executed immediately and at that moment the html tag inside body doesn't exists in DOM.

# how i fixed it : 

--> i placed the script tag at bottom of body tag 

///////////////////////////////////////////////////////////////////////////////////////////////////////

# bug-2: Register Button not working 

# why it happend : 

--> because its z index is set to -1 .

# how i fixed it : 

--> i just comment it out , which make its z index 1 by default 

///////////////////////////////////////////////////////////////////////////////////////////////////////

# bug-3:  The counter was increasing instead of decreasing

# why it happend : 

--> because there is + operator instead of - operator at spotsLeft variable.

# how i fixed it : 

--> replaced - with + opertor. 

///////////////////////////////////////////////////////////////////////////////////////////////////////

# bug-4: Unable to trigger submission alert 

# why it happend : 

--> because eventlistner was applied on form element instead of Submit button .

# how i fixed it : 

--> accessed submit btn in DOM by using its class , then created a new click eventlistener.

///////////////////////////////////////////////////////////////////////////////////////////////////////