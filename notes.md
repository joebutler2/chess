Surprisingly when flushing out the initial logic it did not need a Player class. As soon as it was implemented, the class was removed for "move a piece" logic. The Game object is able to keep track of the player and his/her turn with a small integer that flips between 1 and 2. Could easily be a boolean.

Might introduce a Move class sooner than later. Will also enable the ability to see a history and add in undo features.

