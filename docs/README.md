# react ui guide
![react-ui-guide](https://raw.githubusercontent.com/jsh1400/react-ui-guide/master/docs/react-ui-guide.png)
component for create user interface guide

```
npm i react-ui-guide
```

```javascript
import React from 'react'
import JHelp from 'react-ui-guide'

// your component details ...
render() {
  <div>
    <div id="test">test</div>
    <JHelp helpList={[{selector:'#test',content:'my help'}]}><span>click me</span></JHelp>
  </div>
}

```
### props
|props|type|default|
|-----|----|-------------|
|helpList|array of object|[]|
|style|object|{}|
|className|string|''|
|step|number|0|
|skipText|string|'skip'|
|nextText|string|'next'|
|prevText|string|'prev'|
|closeText|string|'close'|
|onClose|func|undefined|
|onSkip|func|undefined|
|onPrev|func|undefined|
|onNext|func|undefined|

---
```
    helpList=[{selector:'#test',content:'my help'}]|
    or
    helpList=[{selector:'#root > div:nth-child(3) > div',content:'my help'}]|
    
```
