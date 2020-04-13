module Main exposing (main)

import Browser
import Browser.Dom as Dom
import Debug exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)



-- main : Program () Model msg


main =
    Browser.document
        { init = init
        , view = \model -> { title = "Chess made in Elm", body = [ view model ] }
        , subscriptions = \_ -> Sub.none
        , update = update
        }



-- import Game and Board from core
-- We need to render at least the board


type alias Flags =
    { pieces : Pieces }


type alias Pieces =
    List (List Piece)


type alias Model =
    { pieces : Pieces
    , message : String
    }


type alias Piece =
    { icon : String
    }


emptyModel : Model
emptyModel =
    { pieces = [ [] ]
    , message = ""
    }


init : Flags -> ( Model, Cmd Msg )
init initialPieces =
    ( { emptyModel | pieces = initialPieces.pieces }
    , Cmd.none
    )



-- UPDATE
-- How we update our Model on a given Msg?


type Msg
    = NoOp
    | BtnClick


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            Debug.log "update called"
                ( model, Cmd.none )

        BtnClick ->
            ( { model | message = "The button was clicked." }, Cmd.none )



-- VIEW


view : Model -> Html Msg
view model =
    div [ class "chess-app" ]
        [ div
            [ class "user-messages" ]
            [ text model.message ]
        , button [ onClick BtnClick ] [ text "Click me" ]
        ]
