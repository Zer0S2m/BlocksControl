# [BlocksControl](https://zer0s2m.github.io/BlocksControl/app/)

A simple script to control the width, height and<br>
otherof an element when scrolling the window.

## Getting start

Connection JS:

```xml
<script src="https://aleksandr-zero.github.io/BlocksControl/BlocksControl/blocksControl.js"></script>
```
Size script: `6,05 KB`

```xml
<!-- Main container -->
<div class="blocks-control-container">
  <!-- Your blocks -->
  <div class="blocks-control-block-1">
    <p>Lorem ipsum dolor sit.</p>
  </div>
  <div class="blocks-control-block-2">
    <p>Lorem ipsum dolor sit.</p>
  </div>
</div>
```

**Blocks are basically containers should contain a line in the class: `blocks-control-block`;<br>
Must be numbered: Must be numbered `-<int>`!**


```js
const blockContainer = document.querySelector(".blocks-control-container");

const newWidthControl = new WidthControl(blockContainer, {
  1: {
    action: "enlarge",
    actionProperty: "width",
    percent: 30
  },
  2: {
    action: "reduce",
    actionProperty: "width",
    percent: 25
  }
});
```

## Options

| Parameter  		  | Description                  | Type |
|-----------------|------------------------------|------|
| `int` | The serial number of the block, for setting the settings | `int` |
| `<int>.action` | What action to perform on this element. **Parameter**: `(reduce \ enlarge)`.<br>**Parameter value**: *1)* `reduce` - reduce in block; *2)* `enlarge` - Expand in block. | `str` |
| `<int>.actionProperty` | Which property to choose to change. **Parameter**: `(width \ height)` | `str` |
| `<int>.percent` | Shows by what percentage to increase or decrease the block (calculates from the entire block length) | `int` | 
| `<int>.delayedLaunch` | Delayed start occurs after the percentage is reached | `array` |
| `<int>.delayedLaunch[0]` | The first parameter indicates to enable delayed start | `boolean` |
| `<int>.delayedLaunch[1]` | The second parameter indicates the percentage of the scrolled window (calculated by the height of the screen) | `int` |


```js
new WidthControl(..., {
  1: {
    action: "enlarge",
    actionProperty: "width",
    percent: 30
  },
  2: {
    action: "reduce",
    actionProperty: "height",
    percent: 25,
    delayedLaunch: [true, 20]
  }
})
```
