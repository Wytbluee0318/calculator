alert("jsq.js 已成功加载");

let display = document.getElementById("display");

// 输入内容
function append(value) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.value.slice(-1);

    // 如果当前输入的是运算符
    if (operators.includes(value)) {

        // 显示框为空，不允许直接输入运算符
        if (display.value === "") {
            return;
        }

        // 如果上一个也是运算符 → 替换
        if (operators.includes(lastChar)) {
            display.value = display.value.slice(0, -1) + value;
            return;
        }
    }

    display.value += value;
}

// 清空
function clearDisplay() {
    display.value = "";
}
//删除
function deleteOne() {
    display.value = display.value.slice(0, -1);
}


function calculate() {
    
    if (display.value === "510+520+1314") {
        display.value = "吴一麟我喜欢你!--wyt";
        return;
    }

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "错误";
    }
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function(error) {
            console.log('Service Worker registration failed:', error);
        });
}

