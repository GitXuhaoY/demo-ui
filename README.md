# demo-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

<!-- ### Lints and fixes files
```
npm run lint
``` -->
## UI
```
    下载： npm i ex-example-ui
    引入：
        全局引入：
            import demoUI from "demo-ui";
            import "demo-ui/lib/"
        按需引入：
            下载插件：npm i babel-plugin-import -D

            babel.config.js配置：
            plugins: [
                ['import', {
                libraryName: 'demo-ui',
                libraryDirectory: 'es',
                style:true
                }, 'demo-ui']
            ]

            全局使用
                import { deButton } from "demo-ui"
                Vue.use(deButton)
            单文件使用：
                import { deButton } from "demo-ui"
                components:{
                    deButton
                }
```
### BUTTON组件
```
    使用：    
        <de-button
            type: "default",
            size: "大、中、小 三挡选择/medium / small / mini",
            icon: "iconfont",
            loading: "是否加载状态/Boolean",
            disabled: "静止点击/Boolean",
            plain: "朴素按钮/Boolean",
            round: "是否圆角/Boolean",
            circle: "是否圆形/Boolean",
        >
        </de-button>
```      
    
    
    
    
    
    
    
