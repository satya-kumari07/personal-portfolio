const student={
    name:"satya",
    age:23,
    eng:34,
    phy:56,
    getAvg(){
        let Avg=(this.eng+this.phy+this.age)/3;
        console.log(`${this.name} got avg marks is=${avg}`);
    }
}

function 