#!/usr/bin/env nu

let avatar = "
███    ███  ██████   ██████  ███    ██ ██████  ██ ████████ ███████ 
████  ████ ██    ██ ██    ██ ████   ██ ██   ██ ██    ██    ██      
██ ████ ██ ██    ██ ██    ██ ██ ██  ██ ██████  ██    ██    █████   
██  ██  ██ ██    ██ ██    ██ ██  ██ ██ ██   ██ ██    ██    ██      
██      ██  ██████   ██████  ██   ████ ██████  ██    ██    ███████ 
"
                                


use std
std path add "~/.moon/bin"

def main [] {
    print $avatar
}

def "main run" [file: string] {
    print $avatar
    if not ($file | path exists) {
        print $"File not found: ($file)"
    } else {
        cp $file "run/tmp.in"
        enter run
        moon run -g ../src/bin/main.mbt
    }
}