# Chess

This implementation of an age old game leverages the Dependency Inversion Princeple (DIP), aka Clean Architecture, by having a core module that doesn't depend on any significant libraries. Most importantly it doesn't depend on any UI libraries. Thus you can reuse the same logic in many different deployments of the app.

At the time of writing the React implementation is complete with an Elm version in progress. This architecture makes it easy to test out new JS frameworks and rendering methods. One of the planned implementations is a CLI application.

## Explanation of Architecture

The dependency inversion principle says that we should separate high level policy, i.e. business logic, from low level details (networking, databases, frameworks). This enables us to change vendors or tools without having to rewrite significant portions of the application.

While most applications wouldn't leverage DIP at the top level like this one, in this case it does demonstrate the benefits of using it.

## Technical Notes 
Surprisingly when flushing out the initial logic it did not need a Player class. As soon as it was implemented, the class was removed for "move a piece" logic. The Game object is able to keep track of the player and his/her turn with a small integer that flips between 1 and 2. Could easily be a boolean.

Might introduce a Move class sooner than later. Will also enable the ability to see a history and add in undo features.


