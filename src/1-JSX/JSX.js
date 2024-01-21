const JSX = () => {

    const myElement = <h1>I Love JSX</h1>
    const myElement2 = <h1>React is {5+5} times better with JSX</h1>
    const myElement3 = (
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
        </ul>
    )
    const myElement4 = <input type="text"/>
    const myElement5 = <h1 className="myclass">Hello World!</h1>
    const x = 12;
    const myElement6 = <h1> {x<10 ? "Hello" : "Goodbye"} </h1>
    
    
    return(
        <div>
             {myElement}
             {myElement2}
             {myElement3}
             {myElement4}
             {myElement5}
             {myElement6}
            Bu benim JSX componentim
        </div>
    )
}

export default JSX;

// returnin içi html kısmı (görüntülenecek kısım) JSX kısmıda JS kısmıdır
// JSX JS kısmında aslında html ifadeleri kullanırız html ifadelerin içinde {} ile JS ifadelerini belirtiriz(görüntülemek istediğimiz kısımlarda)
// return kısmına JS elementlerini direk {} içinde yazabiliriz ve görüntüleyebiliriz
// JS ifadelerini {} içinde yazıyoruz
// tekli taglerde örneğin <input> olarak değil <input/> olarak yazmalıyız.mutlaka kapatma işaretini koymamız gerekmekte.