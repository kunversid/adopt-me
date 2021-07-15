const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed),
    ]);
};
const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Bruno",
            animal: "Dog",
            breed: "Himalayan Sheepdog",
        }),
        React.createElement(Pet, {
            name: "Pepper",
            animal: "Bird",
            breed: "Cockatiel",
        }),
        React.createElement(Pet, { name: "Tiger", animal: "Dog", breed: "Pug" }),
    ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
