var animalTypes = ["feline", "reptile", "fish", "bird"]

    var whatNoiseDoesTheAnimalMake = function(animals){
      for (type of animals){
        switch (type) {
        case "feline":
        console.log("meoww");
        break;
          case "reptile":
          console.log("ssssss");
        break;
          case "fish":
          console.log("bubbbbleessss");
        break;
          case "bird":
          console.log("squak");
        }
    }