import "./index.scss";
import { Board, Piece, Game, GUI } from "core";

// Using window isn't ideal but it's our only choice.
// Elm compiles down to ES3 so we can't load it in.
window["board"] = new Board();
