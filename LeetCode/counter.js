function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log("Hi "+name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  