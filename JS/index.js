window.onload = function(){

    let content = document.querySelector('.content');
    for(let i = 1 ; i <= 9 ; i++){

        // 在循環内部生成節點並插入到.content

        
        let newDiv = document.createElement('div');
        newDiv.style.background = bgColor()
        newDiv.innerHTML = i
        content.appendChild(newDiv)

    }


    window.onscroll = function(){
        // 獲取頁面滾動多少
        let scrollTop = document.documentElement.scrollTop
        // 獲取設備窗口大小
        let clientHeight = document.documentElement.clientHeight
        // 獲取整個頁面的高度(整個body的高度)
        let bodyHeight = document.body.clientHeight

        console.log( scrollTop, clientHeight, bodyHeight );

        if(parseInt(bodyHeight - scrollTop) == clientHeight){

            console.log('觸底了');

            // 觸底后繼續添加元素

            for(let i =1 ; i <= 6 ; i++){
                let newDiv = document.createElement('div');
                newDiv.style.background = bgColor()
                newDiv.innerHTML = i
                content.appendChild(newDiv)
            }




        }

    }


    // 封裝隨機背景色函數
    function bgColor(){

        let r = Math.round(Math.random()*255)
        let g = Math.round(Math.random()*255)
        let b = Math.round(Math.random()*255)



        return `rgb(${r},${g},${b})` // 模板字符
    }





}