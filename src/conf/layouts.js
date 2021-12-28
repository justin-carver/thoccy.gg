// Reference: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values for keyCodes.

let english100 = `<layout>
<row>
    <keyGroup>
        <key glyph="ESC" keyCode="Escape" size="width-1"/>
    </keyGroup>
    <keyGroup>
        <key glyph="F1" keyCode="F1" size="width-1"/>
        <key glyph="F2" keyCode="F2" size="width-1"/>
        <key glyph="F3" keyCode="F3" size="width-1"/>
        <key glyph="F4" keyCode="F4" size="width-1"/>
    </keyGroup>
    <keyGroup>
        <key glyph="F5" keyCode="F5" size="width-1"/>
        <key glyph="F6" keyCode="F6" size="width-1"/>
        <key glyph="F7" keyCode="F7" size="width-1"/>
        <key glyph="F8" keyCode="F8" size="width-1"/>
    </keyGroup>
    <keyGroup>
        <key glyph="F9" keyCode="F9" size="width-1"/>
        <key glyph="F10" keyCode="F10" size="width-1"/>
        <key glyph="F11" keyCode="F11" size="width-1"/>
        <key glyph="F12" keyCode="F12" size="width-1"/>
    </keyGroup>
    <keyGroup>
        <key glyph="PSC" keyCode="PrintScreen" size="width-1"/>
        <key glyph="SLK" keyCode="ScrollLock" size="width-1"/>
        <key glyph="PAU" keyCode="Pause" size="width-1"/>
    </keyGroup>
    <keyGroup>
    </keyGroup>
</row>
<row>
    <keyGroup>
        <key glyph="\`" secondGlyph="~" keyCode="Backquote" size="width-1"/>
        <key glyph="1" secondGlyph="!" keyCode="Digit1" size="width-1"/>
        <key glyph="2" secondGlyph="@" keyCode="Digit2" size="width-1"/>
        <key glyph="3" secondGlyph="#" keyCode="Digit3" size="width-1"/>
        <key glyph="4" secondGlyph="$" keyCode="Digit4" size="width-1"/>
        <key glyph="5" secondGlyph="%" keyCode="Digit5" size="width-1"/>
        <key glyph="6" secondGlyph="^" keyCode="Digit6" size="width-1"/>
        <key glyph="7" secondGlyph="&" keyCode="Digit7" size="width-1"/>
        <key glyph="8" secondGlyph="*" keyCode="Digit8" size="width-1"/>
        <key glyph="9" secondGlyph="(" keyCode="Digit9" size="width-1"/>
        <key glyph="0" secondGlyph=")" keyCode="Digit0" size="width-1"/>
        <key glyph="-" secondGlyph="_" keyCode="Minus" size="width-1"/>
        <key glyph="=" secondGlyph="+" keyCode="Equal" size="width-1"/>
        <key glyph="BCKSPC" secondGlyph="" keyCode="Backspace" size="width-5"/>
    </keyGroup>
    <keyGroup>
        <key glyph="INS" keyCode="Insert" size="width-1"/>
        <key glyph="HOM" keyCode="Home" size="width-1"/>
        <key glyph="PU" keyCode="PageUp" size="width-1"/>
    </keyGroup>
    <keyGroup>
        <key glyph="NUM" keyCode="NumLock" size="width-1"/>
        <key glyph="/" keyCode="NumpadDivide" size="width-1"/>
        <key glyph="*" keyCode="NumpadMultiply" size="width-1"/>
        <key glyph="-" keyCode="NumpadSubtract" size="width-1"/>
    </keyGroup>
</row>
<row>
    <keyGroup>
        <key glyph="TAB" keyCode="Tab" size="width-3"/>
        <key glyph="Q" keyCode="KeyQ" size="width-1"/>
        <key glyph="W" keyCode="KeyW" size="width-1"/>
        <key glyph="E" keyCode="KeyE" size="width-1"/>
        <key glyph="R" keyCode="KeyR" size="width-1"/>
        <key glyph="T" keyCode="KeyT" size="width-1"/>
        <key glyph="Y" keyCode="KeyY" size="width-1"/>
        <key glyph="U" keyCode="KeyU" size="width-1"/>
        <key glyph="I" keyCode="KeyI" size="width-1"/>
        <key glyph="O" keyCode="KeyO" size="width-1"/>
        <key glyph="P" keyCode="KeyP" size="width-1"/>
        <key glyph="[" secondGlyph="{" keyCode="BracketLeft" size="width-1"/>
        <key glyph="]" secondGlyph="}" keyCode="BracketRight" size="width-1"/>
        <key glyph="\\" keyCode="Backslash" size="width-3"/>
    </keyGroup>
    <keyGroup>
        <key glyph="DEL" keyCode="Delete" size="width-1"/>
        <key glyph="END" keyCode="End" size="width-1"/>
        <key glyph="PD" keyCode="PageDown" size="width-1"/>
    </keyGroup>
    <keyGroup>
        <key glyph="7" keyCode="Numpad7" size="width-1"/>
        <key glyph="8" keyCode="Numpad8" size="width-1"/>
        <key glyph="9" keyCode="Numpad9" size="width-1"/>
        <key glyph="+" keyCode="NumpadAdd" size="width-1"/>
    </keyGroup>
</row>
<row>
    <keyGroup>
        <key glyph="CAPS" keyCode="Tab" size="width-4"/>
        <key glyph="A" keyCode="KeyA" size="width-1"/>
        <key glyph="S" keyCode="KeyS" size="width-1"/>
        <key glyph="D" keyCode="KeyD" size="width-1"/>
        <key glyph="F" keyCode="KeyF" size="width-1"/>
        <key glyph="G" keyCode="KeyG" size="width-1"/>
        <key glyph="H" keyCode="KeyH" size="width-1"/>
        <key glyph="J" keyCode="KeyJ" size="width-1"/>
        <key glyph="K" keyCode="KeyK" size="width-1"/>
        <key glyph="L" keyCode="KeyL" size="width-1"/>
        <key glyph=";" keyCode="Semicolon" size="width-1"/>
        <key glyph="'" secondGlyph="\'\'" keyCode="Quote" size="width-1"/>
        <key glyph="ENTER" secondGlyph="" keyCode="Enter" size="width-5"/>
    </keyGroup>
    <keyGroup />
    <keyGroup />
    <keyGroup />
    <keyGroup />
    <keyGroup />
    <keyGroup>
        <key glyph="4" keyCode="Numpad4" size="width-1"/>
        <key glyph="5" keyCode="Numpad5" size="width-1"/>
        <key glyph="6" keyCode="Numpad6" size="width-1"/>
        <key glyph="+" keyCode="NumpadAdd" size="width-1"/>
    </keyGroup>
</row>
</layout>`;

export {english100};