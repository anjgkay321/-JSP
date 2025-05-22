
//01
function handleClick_01() {
    console.log("clicked...");
}

export function Component_01() {
    return (
        <div>
            <h1>HELLO WORLD - 1</h1>
            <button onClick={handleClick_01}>CLICK ME</button>
        </div>
    );
}

//02

export function Component_02() {
    function handleClick_02() {
        console.log("clicked...02...");
    }
    return (
        <div>
            <h1>HELLO WORLD - 2</h1>
            <button onClick={handleClick_02}>CLICK ME</button>
        </div>
    );

}

export function Component_03() {

    function handleClick_03(event) {
        console.log("keydown..",event.target.value);
    } 
    return (
        <div>
            <h1>HELLO WORLD - 3</h1>
            <input type="text" onKeyDown={handleClick_03} />
        </div>
    );

}