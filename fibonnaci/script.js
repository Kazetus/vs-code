function fibonacci(n) {
    let count = [];
    for(let i = 0; i <= n; i++) {
        if(i == 0) {
            count = [i];
        } else if (i == 1) {
            count.push(count[i-1] + i);
        } else {
            count.push(count[i-2] + count[i-1]);
        }
        let div = document.createElement('div');
        div.style.width = count[i]+"px";
        div.style.height = count[i]+"px";
        div.style.background = "rgb("+(Math.floor(Math.random()*256))+", "+(Math.floor(Math.random()*256))+", "+(Math.floor(Math.random()*256))+")";
        document.querySelector('body').appendChild(div);
    }
    return count;
  }

  console.log(fibonacci(50));