const human = {
    name: "hojun",
    age: 53,
    from: "korea",
    askingHim: function () {
        console.log("hello world!");
    },
};

human.name = 'jun'
console.log(human.name)
human.askingHim()