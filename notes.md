When I was flushing out the initial logic I was suprised that I didn't need a Player class. As soon as I implemented it I ended up removing it for "move a piece" logic. The Game object is able to keep track of the player and his/her turn with a small integer that flips between 1 and 2. Could easily be a boolean.

Might introduce a Move class sooner than later. Will also enable the ability to see a history and add in undo features.

