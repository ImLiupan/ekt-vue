<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    *,
    :after,
    :before {
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }


    /*
    		临时样式
    	 */

    .my-wrapper {
        height: 184.5px;
    }
    
    .house-detail .broadcast{
        height: 0;
        height: calc(100vw * 420 / 750);
    }
    /* end */



    .button {
        border-color: transparent;
        background-color: #f5f5f5;
        color: #444;
        position: relative;
        display: inline-block;
        margin: 0;
        padding: 0 12px;
        min-width: 52px;
        min-height: 47px;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        vertical-align: top;
        text-align: center;
        text-overflow: ellipsis;
        font-size: 16px;
        line-height: 42px;
        cursor: pointer
    }

    .button:hover {
        color: #444;
        text-decoration: none
    }

    .button.activated,
    .button.active {
        border-color: #a2a2a2;
        background-color: #e5e5e5
    }

    .button:after {
        position: absolute;
        top: -6px;
        right: -6px;
        bottom: -6px;
        left: -6px;
        content: ' '
    }

    .button .icon {
        vertical-align: top;
        pointer-events: none
    }

    .button .icon:before,
    .button.icon-left:before,
    .button.icon-right:before,
    .button.icon:before {
        display: inline-block;
        padding: 0 0 1px 0;
        vertical-align: inherit;
        font-size: 24px;
        line-height: 41px;
        pointer-events: none
    }

    .button.icon-left:before {
        float: left;
        padding-right: .2em;
        padding-left: 0
    }

    .button.icon-right:before {
        float: right;
        padding-right: 0;
        padding-left: .2em
    }

    .button.button-block,
    .button.button-full {
        margin-top: 10px;
        margin-bottom: 10px
    }

    .button.button-light {
        border-color: transparent;
        background-color: #fff;
        color: #444
    }

    .button.button-light:hover {
        color: #444;
        text-decoration: none
    }

    .button.button-light.activated,
    .button.button-light.active {
        border-color: #a2a2a2;
        background-color: #fafafa
    }

    .button.button-light.button-clear {
        border-color: transparent;
        background: 0 0;
        box-shadow: none;
        color: #ddd
    }

    .button.button-light.button-icon {
        border-color: transparent;
        background: 0 0
    }

    .button.button-light.button-outline {
        border-color: #ddd;
        background: 0 0;
        color: #ddd
    }

    .button.button-light.button-outline.activated,
    .button.button-light.button-outline.active {
        background-color: #ddd;
        box-shadow: none;
        color: #fff
    }

    .button.button-stable {
        border-color: transparent;
        background-color: #f5f5f5;
        color: #444
    }

    .button.button-stable:hover {
        color: #444;
        text-decoration: none
    }

    .button.button-stable.activated,
    .button.button-stable.active {
        border-color: #a2a2a2;
        background-color: #e5e5e5
    }

    .button.button-stable.button-clear {
        border-color: transparent;
        background: 0 0;
        box-shadow: none;
        color: #b2b2b2
    }

    .button.button-stable.button-icon {
        border-color: transparent;
        background: 0 0
    }

    .button.button-stable.button-outline {
        border-color: #b2b2b2;
        background: 0 0;
        color: #b2b2b2
    }

    .button.button-stable.button-outline.activated,
    .button.button-stable.button-outline.active {
        background-color: #b2b2b2;
        box-shadow: none;
        color: #fff
    }

    .button.button-positive {
        border-color: transparent;
        background-color: #4a90e2;
        color: #fff
    }

    .button.button-positive:hover {
        color: #fff;
        text-decoration: none
    }

    .button.button-positive.activated,
    .button.button-positive.active {
        border-color: #a2a2a2;
        background-color: #2275d7
    }

    .button.button-positive.button-clear {
        border-color: transparent;
        background: 0 0;
        box-shadow: none;
        color: #4a90e2
    }

    .button.button-positive.button-icon {
        border-color: transparent;
        background: 0 0
    }

    .button.button-positive.button-outline {
        border-color: #4a90e2;
        background: 0 0;
        color: #4a90e2
    }

    .button.button-positive.button-outline.activated,
    .button.button-positive.button-outline.active {
        background-color: #4a90e2;
        box-shadow: none;
        color: #fff
    }

    .button.button-calm {
        border-color: transparent;
        background-color: #11c1f3;
        color: #fff
    }

    .button.button-calm:hover {
        color: #fff;
        text-decoration: none
    }

    .button.button-calm.activated,
    .button.button-calm.active {
        border-color: #a2a2a2;
        background-color: #0a9dc7
    }

    .button.button-calm.button-clear {
        border-color: transparent;
        background: 0 0;
        box-shadow: none;
        color: #11c1f3
    }

    .button.button-calm.button-icon {
        border-color: transparent;
        background: 0 0
    }

    .button.button-calm.button-outline {
        border-color: #11c1f3;
        background: 0 0;
        color: #11c1f3
    }

    .button.button-calm.button-outline.activated,
    .button.button-calm.button-outline.active {
        background-color: #11c1f3;
        box-shadow: none;
        color: #fff
    }

    .button.button-assertive {
        border-color: transparent;
        background-color: #ea5a49;
        color: #fff
    }

    .button.button-assertive:hover {
        color: #fff;
        text-decoration: none
    }

    .button.button-assertive.activated,
    .button.button-assertive.active {
        border-color: #a2a2a2;
        background-color: #e5311b
    }

    .button.button-assertive.button-clear {
        border-color: transparent;
        background: 0 0;
        box-shadow: none;
        color: #ea5a49
    }

    .button.button-assertive.button-icon {
        border-color: transparent;
        background: 0 0
    }

    .button.button-assertive.button-outline {
        border-color: #ea5a49;
        background: 0 0;
        color: #ea5a49
    }

    .button.button-assertive.button-outline.activated,
    .button.button-assertive.button-outline.active {
        background-color: #ea5a49;
        box-shadow: none;
        color: #fff
    }

    .button.button-balanced {
        border-color: transparent;
        background-color: #4c0;
        color: #fff
    }

    .button.button-balanced:hover {
        color: #fff;
        text-decoration: none
    }

    .button.button-balanced.activated,
    .button.button-balanced.active {
        border-color: #a2a2a2;
        background-color: #390
    }

    .button.button-balanced.button-clear {
        border-color: transparent;
        background: 0 0;
        box-shadow: none;
        color: #4c0
    }

    .button.button-balanced.button-icon {
        border-color: transparent;
        background: 0 0
    }

    .button.button-balanced.button-outline {
        border-color: #4c0;
        background: 0 0;
        color: #4c0
    }

    .button.button-balanced.button-outline.activated,
    .button.button-balanced.button-outline.active {
        background-color: #4c0;
        box-shadow: none;
        color: #fff
    }

    .button.button-energized {
        border-color: transparent;
        background-color: #ffbd17;
        color: #fff
    }

    .button.button-energized:hover {
        color: #fff;
        text-decoration: none
    }

    .button.button-energized.activated,
    .button.button-energized.active {
        border-color: #a2a2a2;
        background-color: #fdb500
    }

    .button.button-energized.button-clear {
        border-color: transparent;
        background: 0 0;
        box-shadow: none;
        color: #ffbd17
    }

    .button.button-energized.button-icon {
        border-color: transparent;
        background: 0 0
    }

    .button.button-energized.button-outline {
        border-color: #ffbd17;
        background: 0 0;
        color: #ffbd17
    }

    .button.button-energized.button-outline.activated,
    .button.button-energized.button-outline.active {
        background-color: #ffbd17;
        box-shadow: none;
        color: #fff
    }

    .button.button-royal {
        border-color: transparent;
        background-color: #b5b5b5;
        color: #fff
    }

    .button.button-royal:hover {
        color: #fff;
        text-decoration: none
    }

    .button.button-royal.activated,
    .button.button-royal.active {
        border-color: #a2a2a2;
        background-color: #a1a1a1
    }

    .button.button-royal.button-clear {
        border-color: transparent;
        background: 0 0;
        box-shadow: none;
        color: #b5b5b5
    }

    .button.button-royal.button-icon {
        border-color: transparent;
        background: 0 0
    }

    .button.button-royal.button-outline {
        border-color: #b5b5b5;
        background: 0 0;
        color: #b5b5b5
    }

    .button.button-royal.button-outline.activated,
    .button.button-royal.button-outline.active {
        background-color: #b5b5b5;
        box-shadow: none;
        color: #fff
    }

    .button.button-dark {
        border-color: transparent;
        background-color: #484746;
        color: #fff
    }

    .button.button-dark:hover {
        color: #fff;
        text-decoration: none
    }

    .button.button-dark.activated,
    .button.button-dark.active {
        border-color: #a2a2a2;
        background-color: #262626
    }

    .button.button-dark.button-clear {
        border-color: transparent;
        background: 0 0;
        box-shadow: none;
        color: #484746
    }

    .button.button-dark.button-icon {
        border-color: transparent;
        background: 0 0
    }

    .button.button-dark.button-outline {
        border-color: #484746;
        background: 0 0;
        color: #484746
    }

    .button.button-dark.button-outline.activated,
    .button.button-dark.button-outline.active {
        background-color: #484746;
        box-shadow: none;
        color: #fff
    }

    .button-small {
        padding: 2px 4px 1px;
        min-width: 28px;
        min-height: 30px;
        font-size: 12px;
        line-height: 26px
    }

    .button-small .icon:before,
    .button-small.icon-left:before,
    .button-small.icon-right:before,
    .button-small.icon:before {
        font-size: 16px;
        line-height: 19px;
        margin-top: 3px
    }

    .button-large {
        padding: 0 16px;
        min-width: 68px;
        min-height: 59px;
        font-size: 20px;
        line-height: 53px
    }

    .button-large .icon:before,
    .button-large.icon-left:before,
    .button-large.icon-right:before,
    .button-large.icon:before {
        padding-bottom: 2px;
        font-size: 32px;
        line-height: 51px
    }

    .button-icon {
        -webkit-transition: opacity .1s;
        transition: opacity .1s;
        padding: 0 6px;
        min-width: initial;
        border-color: transparent;
        background: 0 0
    }

    .button-icon.button.activated,
    .button-icon.button.active {
        border-color: transparent;
        background: 0 0;
        box-shadow: none;
        opacity: .3
    }

    .button-icon .icon:before,
    .button-icon.icon:before {
        font-size: 32px
    }

    .button-clear {
        -webkit-transition: opacity .1s;
        transition: opacity .1s;
        padding: 0 6px;
        max-height: 42px;
        border-color: transparent;
        background: 0 0;
        box-shadow: none
    }

    .button-clear.button-clear {
        border-color: transparent;
        background: 0 0;
        box-shadow: none;
        color: transparent
    }

    .button-clear.button-icon {
        border-color: transparent;
        background: 0 0
    }

    .button-clear.activated,
    .button-clear.active {
        opacity: .3
    }

    .button-outline {
        -webkit-transition: opacity .1s;
        transition: opacity .1s;
        background: 0 0;
        box-shadow: none
    }

    .button-outline.button-outline {
        border-color: transparent;
        background: 0 0;
        color: transparent
    }

    .button-outline.button-outline.activated,
    .button-outline.button-outline.active {
        background-color: transparent;
        box-shadow: none;
        color: #fff
    }

    .padding>.button.button-block:first-child {
        margin-top: 0
    }

    .button-block {
        display: block;
        clear: both
    }

    .button-block:after {
        clear: both
    }

    .button-full,
    .button-full>.button {
        display: block;
        margin-right: 0;
        margin-left: 0;
        border-right-width: 0;
        border-left-width: 0;
        border-radius: 0
    }

    .button-full>button.button,
    button.button-block,
    button.button-full,
    input.button.button-block {
        width: 100%
    }

    a.button {
        text-decoration: none
    }

    a.button .icon:before,
    a.button.icon-left:before,
    a.button.icon-right:before,
    a.button.icon:before {
        margin-top: 2px
    }

    .button.disabled,
    .button[disabled] {
        opacity: .4;
        cursor: default!important;
        pointer-events: none
    }

    .button-assertive:active:not(.md-button) {
        background-color: #e5311b
    }

    .button-assertive:active:not(.md-button).button-clear {
        background-color: transparent;
        color: #e5311b
    }

    .button-positive:active:not(.md-button) {
        background-color: #2275d7
    }

    .button-positive:active:not(.md-button).button-clear {
        background-color: transparent;
        color: #2275d7
    }

    .button-balanced:active:not(.md-button) {
        background-color: #390
    }

    .button-balanced:active:not(.md-button).button-clear {
        background-color: transparent;
        color: #390
    }

    .button-energized:active:not(.md-button) {
        background-color: #e3a200
    }

    .button-energized:active:not(.md-button).button-clear {
        background-color: transparent;
        color: #e3a200
    }

    .button-calm:active:not(.md-button) {
        background-color: #0a9dc7
    }

    .button-calm:active:not(.md-button).button-clear {
        background-color: transparent;
        color: #0a9dc7
    }

    .button-royal:active:not(.md-button) {
        background-color: #9c9c9c
    }

    .button-royal:active:not(.md-button).button-clear {
        background-color: transparent;
        color: #9c9c9c
    }

    .button-light:active:not(.md-button) {
        background-color: #e6e6e6
    }

    .button-light:active:not(.md-button).button-clear {
        background-color: transparent;
        color: #e6e6e6
    }

    .button-dark:active:not(.md-button) {
        background-color: #2e2e2d
    }

    .button-dark:active:not(.md-button).button-clear {
        background-color: transparent;
        color: #2e2e2d
    }

    .button-stable:active:not(.md-button) {
        background-color: #dcdcdc
    }

    .button-stable:active:not(.md-button).button-clear {
        background-color: transparent;
        color: #dcdcdc
    }

    .button-outline:active {
        color: #fff!important
    }

    .button-fab {
        min-width: 44px!important;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        padding: 1px 0 0
    }

    .md-button {
        position: relative;
        overflow: hidden;
        border: none;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .26);
        -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .26)
    }

    .md-ripple {
        position: absolute;
        border-radius: 50%;
        background-color: hsla(0, 0%, 100%, .4);
        min-width: 20px;
        min-height: 20px;
        opacity: 0
    }

    .md-ripple-effect {
        animation: ripple 2s;
        -webkit-animation: ripple 2s
    }

    @keyframes ripple {
        0% {
            transform: scale(1);
            opacity: .4
        }
        to {
            transform: scale(20);
            opacity: 0
        }
    }

    @-webkit-keyframes ripple {
        0% {
            -webkit-transform: scale(1);
            opacity: .4
        }
        to {
            -webkit-transform: scale(20);
            opacity: 0
        }
    }

    .backdrop {
        background-color: rgba(0, 0, 0, .3);
        transition-duration: .2s;
        -webkit-transition-duration: .2s;
        pointer-events: auto
    }

    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 11;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .4);
        visibility: hidden;
        opacity: 0;
        -webkit-transition: opacity .1s linear;
        transition: opacity .1s linear
    }

    .backdrop.visible {
        visibility: visible
    }

    .backdrop.active {
        opacity: 1
    }

    .popup-container {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: 0 0;
        display: -webkit-box;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -moz-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -moz-align-items: center;
        align-items: center;
        z-index: 12;
        visibility: hidden
    }

    .popup-container.popup-showing {
        visibility: visible
    }

    .popup-container.popup-hidden .popup {
        -webkit-animation-name: scaleOut;
        animation-name: scaleOut;
        -webkit-animation-duration: .1s;
        animation-duration: .1s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both
    }

    .popup-container.active .popup {
        -webkit-animation-name: superScaleIn;
        animation-name: superScaleIn;
        -webkit-animation-duration: .2s;
        animation-duration: .2s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both
    }

    .popup-container .popup {
        width: 250px;
        max-width: 100%;
        max-height: 90%;
        border-radius: 0;
        background-color: hsla(0, 0%, 100%, .9);
        display: -webkit-box;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-direction: normal;
        -webkit-box-orient: vertical;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column
    }

    .popup-container input,
    .popup-container textarea {
        width: 100%
    }

    .popup-head {
        padding: 15px 10px;
        border-bottom: 1px solid #eee;
        text-align: center
    }

    .popup-title {
        margin: 0;
        padding: 0;
        font-size: 15px
    }

    .popup-sub-title {
        margin: 5px 0 0;
        padding: 0;
        font-weight: 400;
        font-size: 11px
    }

    .popup-body {
        padding: 10px;
        overflow: auto
    }

    .popup-buttons {
        display: -webkit-box;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-direction: normal;
        -webkit-box-orient: horizontal;
        -moz-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        padding: 10px;
        min-height: 65px
    }

    .popup-buttons .button {
        -webkit-box-flex: 1;
        -moz-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: block;
        min-height: 45px;
        border-radius: 2px;
        line-height: 20px;
        margin-right: 5px
    }

    .popup-buttons .button:last-child {
        margin-right: 0
    }

    .popup-open,
    .popup-open.modal-open .modal {
        pointer-events: none
    }

    .popup-open .popup,
    .popup-open .popup-backdrop {
        pointer-events: auto
    }

    .popup-container .popup {
        color: #484746;
        width: 275px;
        border-radius: 4px
    }

    .popup-container .popup .popup-head {
        border-bottom: 1px solid #eee
    }

    .popup-buttons>.button {
        margin-bottom: 0;
        margin-right: 10px
    }

    .popup-buttons>.button:last-child {
        margin-right: 0
    }

    .popup-buttons>.button.button-block {
        margin-top: 0
    }

    .popup-buttons>.button .button-default {
        border: 1px solid #e3e3e3
    }

    @-webkit-keyframes scaleOut {
        0% {
            -webkit-transform: scale(1);
            opacity: 1
        }
        to {
            -webkit-transform: scale(.8);
            opacity: 0
        }
    }

    @keyframes scaleOut {
        0% {
            transform: scale(1);
            opacity: 1
        }
        to {
            transform: scale(.8);
            opacity: 0
        }
    }

    @-webkit-keyframes superScaleIn {
        0% {
            -webkit-transform: scale(1.3);
            opacity: 0
        }
        to {
            -webkit-transform: scale(1);
            opacity: 1
        }
    }

    @keyframes superScaleIn {
        0% {
            transform: scale(1.3);
            opacity: 0
        }
        to {
            transform: scale(1);
            opacity: 1
        }
    }

    .popup-container.popup-hidden .popup {
        -webkit-animation-duration: .1s;
        animation-duration: .1s
    }

    .popup-container.active .popup {
        -webkit-animation-duration: .3s;
        animation-duration: .3s
    }

    @-webkit-keyframes customScaleIn {
        0% {
            -webkit-transform: scale(.3);
            opacity: 0
        }
        to {
            -webkit-transform: scale(1);
            opacity: 1
        }
    }

    @keyframes customScaleIn {
        0% {
            -webkit-transform: scale(.3);
            opacity: 0
        }
        to {
            -webkit-transform: scale(1);
            opacity: 1
        }
    }

    @-webkit-keyframes customScaleOut {
        0% {
            -webkit-transform: scale(1);
            opacity: 1
        }
        to {
            -webkit-transform: scale(.3);
            opacity: 0
        }
    }

    @keyframes customScaleOut {
        0% {
            -webkit-transform: scale(1);
            opacity: 1
        }
        to {
            -webkit-transform: scale(0);
            opacity: 0
        }
    }

    @-webkit-keyframes slideDownIn {
        0% {
            -webkit-transform: translateY(-20%);
            transform: translateY(-20%);
            opacity: 0
        }
        to {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1
        }
    }

    @keyframes slideDownIn {
        0% {
            -webkit-transform: translateY(-20%);
            transform: translateY(-20%);
            opacity: 0
        }
        to {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1
        }
    }

    @-webkit-keyframes slideUpOut {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1
        }
        to {
            -webkit-transform: translateY(-20%);
            transform: translateY(-20%);
            opacity: 0
        }
    }

    @keyframes slideUpOut {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1
        }
        to {
            -webkit-transform: translateY(-20%);
            transform: translateY(-20%);
            opacity: 0
        }
    }

    .popup-container[effect=scale].popup-hidden .popup {
        -webkit-animation-name: customScaleOut;
        animation-name: customScaleOut;
        -webkit-animation-duration: .25s;
        animation-duration: .25s
    }

    .popup-container[effect=scale].active .popup {
        -webkit-animation-name: customScaleIn;
        animation-name: customScaleIn;
        -webkit-animation-duration: .25s;
        animation-duration: .25s
    }

    .popup-container[effect=slide].popup-hidden .popup {
        -webkit-animation-name: slideUpOut;
        animation-name: slideUpOut;
        -webkit-animation-duration: .25s;
        animation-duration: .25s;
        -webkit-animation-timing-function: ease;
        animation-timing-function: ease
    }

    .popup-container[effect=slide].active .popup {
        -webkit-animation-name: slideDownIn;
        animation-name: slideDownIn;
        -webkit-animation-duration: .25s;
        animation-duration: .25s;
        -webkit-animation-timing-function: ease;
        animation-timing-function: ease
    }

    .popup.ios {
        height: auto;
        width: 280px;
        border-radius: 10px
    }

    .popup.ios .popup-head {
        padding: 20px 0 22px;
        border-bottom: none;
        position: relative
    }

    .popup.ios .popup-head .popup-sub-title,
    .popup.ios .popup-head .popup-title {
        font-family: sans-serif;
        color: #000
    }

    .popup.ios .popup-head .popup-title {
        -webkit-font-smoothing: subpixel-antialiased!important;
        font-weight: 300;
        font-size: 17px;
        line-height: 17px;
        font-weight: 700
    }

    .popup.ios .popup-head .popup-sub-title {
        margin-top: 8px;
        font-size: 13px;
        line-height: 13px;
        -webkit-font-smoothing: antialiased!important;
        font-weight: 400
    }

    .popup.ios .popup-buttons,
    .popup.ios .popup-buttons .button-ok {
        padding: 0;
        height: 45px;
        min-height: 45px
    }

    .popup.ios .popup-buttons .button-ok {
        -webkit-font-smoothing: subpixel-antialiased!important;
        background-color: none;
        border: none;
        margin-top: 0;
        font-size: 17px;
        line-height: 45px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px
    }

    .popup.ios .popup-buttons .button-ok:active {
        background-color: rgba(0, 0, 0, .1)
    }

    .popup.ios.confirm .popup-buttons {
        padding: 0;
        height: 45px;
        min-height: 45px
    }

    .popup.ios.confirm .popup-buttons .button {
        margin-right: 0
    }

    .popup.ios.confirm .popup-buttons .button-cancel,
    .popup.ios.confirm .popup-buttons .button-ok {
        -webkit-font-smoothing: subpixel-antialiased!important;
        background-color: transparent;
        border: none;
        margin-top: 0;
        font-size: 17px;
        line-height: 45px;
        min-height: 45px;
        height: 45px;
        padding: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0
    }

    .popup.ios.confirm .popup-buttons .button-cancel:active,
    .popup.ios.confirm .popup-buttons .button-ok:active {
        background-color: rgba(0, 0, 0, .1)
    }

    .popup.ios.confirm .popup-buttons .button-ok {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 10px
    }

    .popup.ios.confirm .popup-buttons .button-cancel {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10;
        font-weight: 600;
        font-family: sans-serif
    }

    .popup-container .von-popup {
        background-color: #fff
    }

    .popup-container .von-popup .popup-head {
        border-bottom: none
    }

    .popup-container .von-popup .popup-body {
        padding: 22px 18px
    }

    .popup-container .von-popup .popup-body p {
        font-weight: 100!important;
        -webkit-font-smoothing: subpixel-antialiased
    }

    .popup-container .von-popup .popup-body.no-content * {
        opacity: 0
    }

    .popup-container .von-popup .popup-body .button-close {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 30px
    }

    .popup-container .von-popup .popup-buttons {
        padding: 0;
        min-height: 45px
    }

    .popup-container .von-popup .popup-buttons .button {
        min-height: 45px;
        font-size: 14px;
        line-height: 20px;
        border: none;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        margin-right: 0;
        background-color: transparent
    }

    .popup-container .von-popup .popup-buttons .button:first-of-type {
        border-bottom-left-radius: 4px
    }

    .popup-container .von-popup .popup-buttons .button:last-of-type {
        border-right: none;
        border-bottom-right-radius: 4px
    }

    .popup-container .von-popup .popup-buttons .button.button-light {
        background-color: #fff
    }

    .popup-container .von-popup .popup-buttons .button.button-light:active {
        background-color: rgba(0, 0, 0, .1)
    }

    .popup-container .von-popup .popup-buttons .button.button-assertive {
        border-top: none;
        background-color: #ea5a49
    }

    .popup-container .von-popup .popup-buttons .button.button-assertive:active {
        background-color: #e73f2b
    }

    .popup-buttons .button-default {
        border: 1px solid #e5e5e5
    }
</style>
