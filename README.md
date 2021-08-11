# Creating snake and ladder board

### First Approach
```sh
function createSLB() {
    let rows = [];
    let arr = [];

    for(let i=100, j=1; i>0; i--, j++) {
        arr.push(i);
        if(j%10 ==0){
            if(rows.length % 2 === 0) {
                rows.push(arr);
            } else {
                rows.push(arr.reverse());
            }
            
            arr = [];
        }
    }
    return rows;
}

console.log("First approach", createSLB());
```
### Second Approach
```sh
function createSnakeLadderBoard() {
    const rowsFirstNum = [100, 81, 80, 61, 60, 41, 40, 21, 20, 1];
    const rows = [];

    while(rows.length < 10) {
        let num = rowsFirstNum[rows.length];
        let arr = [];
        let count = 0;
        if(count === 10) count = 0;

        if(rows.length%2 === 0) {
            while(count < 10) {
                arr.push(num-count);
                count += 1;
            }
        } else {
            while(count < 10) {
                arr.push(num+count);
                count += 1;
            }
        }
        rows.push(arr);
    }

    return rows;
}
console.log("Second approach", createSnakeLadderBoard());
```

### Board image
![Board image](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)